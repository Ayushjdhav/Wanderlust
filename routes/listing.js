const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingSchema } = require("../schema");
const Listing = require("../models/listing.js");


const mongoose = require("mongoose");

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};



//INDEX ROUTE
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

//NEW ROUTE
router.get("/new", (req, res) => {
    res.render("listings/new.ejs");


});


//EDIT ROUTE
router.get("/:id/edit", wrapAsync(async (req, res) => {
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
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;

    // Check if the MongoDB ObjectId is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ExpressError(404, "Page Not Found");
    }

    const listing = await Listing.findById(id).populate("reviews");

    // Listing not found in DB
    if (!listing) {
        throw new ExpressError(404, "Page Not Found");
    }

    res.render("listings/show.ejs", { listing });
}));

//CREATE ROUTE
router.post("/",
    validateListing,
    wrapAsync(async (req, res) => {


        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    }));




//UPDATE ROUTE
router.put("/:id",
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
router.delete("/:id", wrapAsync(async (req, res) => {
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

module.exports = router;