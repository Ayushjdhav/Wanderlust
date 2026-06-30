if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const ExpressError = require("./utils/ExpressError");
const User = require("./models/user");

const listingRouter = require("./routes/listing");
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user");

// =======================
// DATABASE CONNECTION
// =======================

const dbUrl = process.env.ATLASDB_URL;

console.log("=================================");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("PORT:", process.env.PORT);
console.log("ATLASDB_URL exists:", !!dbUrl);
console.log("SECRET exists:", !!process.env.SECRET);
console.log("=================================");

async function connectDB() {
    try {
        await mongoose.connect(dbUrl);

        console.log("✅ Connected to MongoDB Atlas");
        console.log("Database:", mongoose.connection.name);
        console.log("Host:", mongoose.connection.host);
    } catch (err) {
        console.error("❌ MongoDB Connection Failed");
        console.error(err);
        process.exit(1);
    }
}



mongoose.connection.on("connected", () => {
    console.log("🟢 Mongoose Connected");
});

mongoose.connection.on("error", (err) => {
    console.log("🔴 Mongoose Error");
    console.log(err);
});

mongoose.connection.on("disconnected", () => {
    console.log("🟡 Mongoose Disconnected");
});

// =======================
// EXPRESS CONFIG
// =======================

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// =======================
// SESSION
// =======================

const sessionOptions = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    },
};

app.use(session(sessionOptions));
app.use(flash());

// =======================
// PASSPORT
// =======================

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// =======================
// GLOBAL VARIABLES
// =======================

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    res.locals.search = req.query.search || "";
    next();
});

// =======================
// REQUEST LOGGER
// =======================

app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

// =======================
// ROUTES
// =======================
app.get("/", (req, res) => {
    res.redirect("/listings");
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// =======================
// TEST ROUTE
// =======================

app.get("/test", (req, res) => {
    throw new Error("Testing Error");
});

// =======================
// 404
// =======================

app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// =======================
// ERROR HANDLER
// =======================

app.use((err, req, res, next) => {
    console.error("========== EXPRESS ERROR ==========");
    console.error("URL:", req.originalUrl);
    console.error("METHOD:", req.method);
    console.error(err.stack);
    console.error("===================================");

    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong!";

    res.status(statusCode).render("error", { message });
});

// =======================
// SERVER
// =======================

const PORT = process.env.PORT || 8080;

async function startServer() {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`🚀 Server listening on port ${PORT}`);
    });
}

startServer();