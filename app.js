const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const { listingSchema } = require("./schema");



const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});


const validateListing = (req, res, next) => {
 let {err} = listingSchema.validateAsync(req.body);
if(error){
    let errMsg = error.details.map(el => el.message).join(",");
    throw new ExpressError(400, errMsg);
}else{
    next();
}
}

//INDEX ROUTE
app.get("/listings", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

//NEW ROUTE
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");


});


//EDIT ROUTE
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ExpressError(404, "Page Not Found");
    }

    const listing = await Listing.findById(id);

    if (!listing) {
        throw new ExpressError(404, "Page Not Found");
    }

    res.render("listings/edit.ejs", { listing });
}));


// SHOW ROUTE
app.get("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;

    // Check if the MongoDB ObjectId is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ExpressError(404, "Page Not Found");
    }

    const listing = await Listing.findById(id);

    // Listing not found in DB
    if (!listing) {
        throw new ExpressError(404, "Page Not Found");
    }

    res.render("listings/show.ejs", { listing });
}));

//CREATE ROUTE
app.post("/listings",
    validateListing,
    wrapAsync(async (req, res, next) => {
   

    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
}));
   



//UPDATE ROUTE
app.put("/listings/:id",
    validateListing, wrapAsync(async (req, res) => {
    let { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ExpressError(404, "Page Not Found");
    }

    const listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing }
    );

    if (!listing) {
        throw new ExpressError(404, "Page Not Found");
    }

    res.redirect(`/listings/${id}`);
}));

//DELETE ROUTE
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ExpressError(404, "Page Not Found");
    }

    const deletedListing = await Listing.findByIdAndDelete(id);

    if (!deletedListing) {
        throw new ExpressError(404, "Page Not Found");
    }

    res.redirect("/listings");
}));

app.get("/test", (req, res) => {
    throw new Error("Testing Error");
});
// app.get("/testListing",async (req, res) => {
//     let sampleListing = new Listing({
//         title : "My New Villa",
//         image:"",
//         description: "By the beach",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India"
//     });

//     await sampleListing.save();
//     console.log("sample wass saved");
//     res.send(" successful testing");


// });
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", {message}); 
    // res.status(statusCode).send(message);
});


app.listen(8080, () => {
    console.log("server is listening to port 8080");
});