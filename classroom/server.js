const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");


app.use(session({secret:"mysupersecretstring"}));
app.use(flash());

app.get("/test", (req, res) => {
    app.get("test successful!")
})

// app.get("/", (req, res) => {
//     res.send("Hi, I am root!");
// });

// app.use("/users", users);
// app.use("/posts", posts);


// START SERVER
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});