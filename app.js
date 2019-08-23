const express = require("express"),
      app = express(),
      mongoose = require("mongoose"),
      bodyParser = require("body-parser"),
      PORT = 3000;


mongoose.connect("mongodb://localhost/myBlogApp", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("Home page!")
});

app.listen(PORT, () => {
    console.log("Server is running localhost:" + PORT );
});