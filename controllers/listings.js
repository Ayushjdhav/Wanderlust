const Listing = require("../models/listing");
const mongoose = require("mongoose");
const ExpressError = require("../utils/ExpressError");
const axios = require("axios");


module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

//NEW 
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

//SHOW
module.exports.showListing = async (req, res) => {
    let { id } = req.params;

    // Check if the MongoDB ObjectId is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ExpressError(404, "Page Not Found");
    }

    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
          .populate("owner");

    if (!listing) {
        req.flash("error", "Listing you requested for does not exits!");
        return res.redirect("/listings");
    }

//     console.log(listing.geometry);
// console.log(listing.geometry.coordinates);

    res.render("listings/show.ejs", { listing ,
         geoApiKey: process.env.GEOAPIFY_API_KEY,
    });
    
   
};

//EDIT
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ExpressError(404, "Page Not Found");
    }

    const listing = await Listing.findById(id);

    let originalImageUrl = listing.image.url;
     originalImageUrl  = originalImageUrl.replace("/upload", "/upload/w_250");
    //  console.log(originalImageUrl);
    

    res.render("listings/edit.ejs", { listing ,  originalImageUrl});
};

//CREATE
module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);

    // Geocode location
    const address = `${req.body.listing.location}, ${req.body.listing.country}`;

    const response = await axios.get(
        "https://api.geoapify.com/v1/geocode/search",
        {
            params: {
                text: address,
                apiKey: process.env.GEOAPIFY_API_KEY,
            },
        }
    );

    const feature = response.data.features[0];

    if (!feature) {
        req.flash("error", "Invalid location!");
        return res.redirect("/listings/new");
    }

    newListing.geometry = {
        type: "Point",
        coordinates: feature.geometry.coordinates,
    };

    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    await newListing.save();

    req.flash("success", "New Listing created!");
    res.redirect("/listings");
};


//UPDATE
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ExpressError(404, "Page Not Found");
    }

    const listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing }
    );

    if(typeof req.file !== "undefined" ){
    let url = req.file.path;
let filename = req.file.filename;
listing.image = {url, filename};
await listing.save();
    }

    req.flash("success", " Listing Updated!");
    res.redirect(`/listings/${id}`);
};


//DELETE
module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ExpressError(404, "Page Not Found");
    }

    const deletedListing = await Listing.findByIdAndDelete(id);

    req.flash("success", " Listing Deleted!");
    res.redirect("/listings");
};
