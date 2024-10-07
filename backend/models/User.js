const mongoose = require('mongoose');

<<<<<<< HEAD
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  idNumber: {
    type: String,
    required: true
  },
  accountNumber: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
=======
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
>>>>>>> 2e33eb6623be3e41c679c394cb2966b36d795b7f
