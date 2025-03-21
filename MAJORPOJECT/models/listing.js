const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Correct the typo here: change lIstingSchema to listingSchema
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1740452527478-f88a376fd591?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1740452527478-f88a376fd591?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        : v,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Ensure you're using the correct schema variable name
const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
