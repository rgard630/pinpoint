const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoutes');

// Other middleware and configurations

// Use the contactRoutes middleware
app.use('/contact', contactRoutes);

// Other routes and configurations

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
