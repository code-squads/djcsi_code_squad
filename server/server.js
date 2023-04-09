import express from "express";
import slashes from "connect-slashes";
import cors from "cors";
import mongoose from "mongoose";
import path from 'path';
import "dotenv/config.js";

// if (process.env.NODE_ENV !== "production") {
//   // dotenv.config({ path: path.resolve(__dirname, './.env') });
// }

import { MONGODB_SRV_STRING, PORT } from "./src/constants/config.js";

import newEntity from './src/routes/newEntity.js';
import auth from './src/routes/auth.js';
import employee from './src/routes/employee.js';
import sms from './src/routes/sms.js';

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
app.use(newEntity, auth, sms, employee);



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