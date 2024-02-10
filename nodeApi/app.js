const mongoose = require('mongoose');

// Replace 'mongodb://localhost/mydatabase' with your MongoDB connection string.
mongoose.connect('mongodb://localhost:27017/nodejs', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a reference to the default connection
const db = mongoose.connection;

// Handle database connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
