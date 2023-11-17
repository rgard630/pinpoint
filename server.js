const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app (assuming the build folder exists)
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Define routes or other server logic here

// All other GET requests not handled by Express should serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Set the port for the server to listen on
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
