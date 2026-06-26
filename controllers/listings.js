const Listing = require("../models/listing");
const mongoose = require("mongoose");
const ExpressError = require("../utils/ExpressError");

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
        });

    if (!listing) {
        req.flash("error", "Listing you requested for does not exits!");
        return res.redirect("/listings");
    }

    res.render("listings/show.ejs", { listing });
};

//EDIT
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ExpressError(404, "Page Not Found");
    }

    const listing = await Listing.findById(id);

    res.render("listings/edit.ejs", { listing });
};

//CREATE
module.exports.createListing = async (req, res, next) => {
let url = req.file.path;
let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    await newListing.save();
    req.flash("success", "New Listing created!");
    res.redirect("/listings");
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ExpressError(404, "Page Not Found");
    }

    const listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing }
    );

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
