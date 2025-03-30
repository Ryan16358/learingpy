const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = "mongodb://localhost:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});

  res.render("listings/index.ejs", { allListings });
});

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "traveling ",
//     description: "monument river",
//     price: 100,
//     location: "usa",
//   });

//   await sampleListing.save();
//   console.log("sample listing saved");
//   res.send("sample listing saved");
// });

app.listen(5000, () => {
  console.log("Server is running on port 8080");
});
