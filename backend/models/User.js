const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  idNumber: { type: String, required: true },
  accountNumber: { type: String, required: true },
  password: { type: String, required: true },  // Store the hashed password
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
