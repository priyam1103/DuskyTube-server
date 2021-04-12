require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const PORT = process.env.PORT || 3001;
const videolist = require("./videodata");


app.get("/api/videolist", async function(req, res) {
    try {
        res.status(200).json((videolist));
    } catch (err) {
        res.status(400).json({ message: "Please try again" });
    }
});

app.listen(PORT, function() {
    console.log("Running on " + PORT);
});