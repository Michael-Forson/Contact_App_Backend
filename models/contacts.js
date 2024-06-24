const mongoose = require('mongoose')


const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a name"],
    trim: true,
    maxlength: [30, "name cannot be more than 30 charactes"],
  },
  phone: {
    type: String,
    required: [true, "Must provide a phone number"],
    trim: true,
    maxlength: [15, "phone cannot be more than 15 charactes"],
  },
  email: {
    type: String,
    trim: true,
    maxlength: [25, "email cannot be more than 25 charactes"],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [256, "description cannot be more than 256 charactes"],
  },
});

module.exports = mongoose.model("Contact",ContactSchema)
