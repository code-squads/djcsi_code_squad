const express = require("express");
const slashes = require("connect-slashes");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { MONGODB_SRV_STRING, PORT } = require("./constants/config");
const newEntity = require('./routes/newEntity');
const auth = require('./routes/auth');
const sms = require('./routes/sms');

// Setting the MongoDB
mongoose.set('strictQuery', true);
mongoose
  .connect(MONGODB_SRV_STRING)
  .then((success) => {
    console.log("Successfuly connected to MongoDB !!");
  })
  .catch((err) => {
    console.log("Error in mongoose connection !");
    console.log(err);
  });


// Setting up the server
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(slashes(false));
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));


// Preparing routers
app.use(newEntity, auth, sms);



// Test
app.get("/test", (req, res) => {
  res.status(200).send("Server is running !!");
});
app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "Server is running !!" });
});
app.get("/api/ping", (req, res) => {
  res.status(200).send("-- ok --");
});

// 404 pages for development
app.get("*", (req, res) => {
  res.status(404).send("API not found :(  <br> ¯\\_(ツ)_/¯");
});