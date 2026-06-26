const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const ExpressError = require("../utils/ExpressError");


const mongoose = require("mongoose");





//INDEX ROUTE
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

//NEW ROUTE
router.get("/new", isLoggedIn, (req, res) => {
    res.render("listings/new.ejs");


});


//EDIT ROUTE
router.get("/:id/edit",isLoggedIn,
     isOwner,
      wrapAsync(async (req, res) => {
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

    const listing = await Listing.findById(id)
    .populate({
        path:"reviews",
        populate:{
            path: "author",
        },
    });
    console.log("Listing Owner:", listing.owner);
    if(!listing){
        req.flash("error", "Listing you requested for does not exits!");
       return res.redirect("/listings");
    }

    // Listing not found in DB
    if (!listing) {
        throw new ExpressError(404, "Page Not Found");
    }

    res.render("listings/show.ejs", { listing });
}));

//CREATE ROUTE
router.post("/",
    validateListing,
    isLoggedIn,
    
    wrapAsync(async (req, res) => {


        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        await newListing.save();
        req.flash("success", "New Listing created!");
        res.redirect("/listings");
    }));




//UPDATE ROUTE
router.put("/:id",
    validateListing,isLoggedIn,
    isOwner,
     wrapAsync(async (req, res) => {
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
 req.flash("success", " Listing Updated!");
        res.redirect(`/listings/${id}`);
    }));

//DELETE ROUTE
router.delete("/:id",isLoggedIn,
     isOwner,
      wrapAsync(async (req, res) => {
    let { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ExpressError(404, "Page Not Found");
    }

    const deletedListing = await Listing.findByIdAndDelete(id);

    if (!deletedListing) {
        throw new ExpressError(404, "Page Not Found");
    }
 req.flash("success", " Listing Deleted!");
    res.redirect("/listings");
}));

module.exports = router;