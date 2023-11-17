const mongoose = require('mongoose');

// Define the Project schema
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  deployedLink: {
    type: String,
    required: true
  },
  githubLink: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model using the schema
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
