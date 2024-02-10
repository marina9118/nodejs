const { MongoClient } = require('mongodb');

// Connection URL and database name
const url = 'mongodb://localhost:27017'; // MongoDB default URL
const dbName = 'nodejs'; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Connect to the server
client.connect()
  .then(() => {
    console.log('Connected to MongoDB');
    const db = client.db(dbName);

    // Continue with database operations here

    // Close the MongoDB connection when done
    client.close();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
