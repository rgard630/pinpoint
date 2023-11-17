const Contact = require('../Contact.js');

const contactController = {
  submitContactForm: async (req, res) => {
    try {
      const { name, email, message } = req.body;

      // Ensure the required fields are present in the request body
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
      }

      // Create a new Contact instance using the Contact model
      const newContact = new Contact({
        name,
        email,
        message
      });

      // Save the contact form data to the database
      await newContact.save();

      return res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return res.status(500).json({ error: 'Server error, unable to submit contact form' });
    }
  }
};

module.exports = contactController;

