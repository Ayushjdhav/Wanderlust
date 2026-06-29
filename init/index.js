const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const axios = require("axios");

const path = require("path");

require("dotenv").config({
    path: path.join(__dirname, "../.env"),
});

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to DB");
        initDB();
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    try {
        await Listing.deleteMany({});

        const listings = [];

        for (let obj of initData.data) {

            const address = `${obj.location}, ${obj.country}`;
            // console.log("Geocoding:", address);

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

            obj.owner = new mongoose.Types.ObjectId("6a3b7de22ee72130e4a19b7e");

            if (!feature) {
                console.log(`Could not geocode: ${address}`);
                continue;
            }

            obj.geometry = {
                type: "Point",
                coordinates: feature.geometry.coordinates,
            };

            listings.push(obj);
        }

        await Listing.insertMany(listings);

        console.log("Data was initialized");
    } catch (err) {
        console.error(err);
    }
};