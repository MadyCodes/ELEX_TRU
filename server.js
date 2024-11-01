// server.js
require('dotenv').config(); // Load environment variables from .env file
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting the server:', err);
    process.exit(1); // Exit the process if there's an error starting the server
  }
  console.log(`Server running on port ${PORT}`);
});
