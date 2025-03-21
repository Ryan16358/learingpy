const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://localhost:27017/wanderlust";

main().then(() => {
  console.log("Connected to MongoDB");
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "traveling ",
    description: "monument river",
    price: 100,
    location: "usa",
  });

  await sampleListing.save();
  console.log("sample listing saved");
  res.send("sample listing saved");
});
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
