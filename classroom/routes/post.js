const express = require("express");
const router = express.Router();

// INDEX - POSTS
router.get("/", (req, res) => {
    res.send("GET for posts");
});

// SHOW ROUTE
router.get("/:id", (req, res) => {
    res.send("GET for post id");
});

// CREATE POST
router.post("/", (req, res) => {
    res.send("POST for posts");
});

// DELETE POST
router.delete("/:id", (req, res) => {
    res.send("DELETE for post id");
});

module.exports = router;