const express = require("express");
const router = express.Router();


// INDEX - USERS
router.get("/", (req, res) => {
    res.send("GET for users");
});

// SHOW ROUTE
router.get("/:id", (req, res) => {
    res.send("GET for user id");
});

// CREATE USER
router.post("/", (req, res) => {
    res.send("POST for users");
});

// DELETE USER
router.delete("/:id", (req, res) => {
    res.send("DELETE for user id");
});

module.exports = router;