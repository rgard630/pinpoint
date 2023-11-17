const mongoose = require('mongoose');

// Define the Contact schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    // Validate email format
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email']
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model using the schema
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;

