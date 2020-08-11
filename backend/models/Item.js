const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name cannot be more that 50 characters"],
  },
  description: {
    type: String,
    required: [true, "Please enter description"],
    maxlength: [500, "Description cannot be more than 500 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please enter price"],
  },
  newly: {
    type: Boolean,
    default: true,
  },
  imageUrl: {
    type: String,
    default: "no-photo.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Item", ItemSchema);
