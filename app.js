require('dotenv').config();
const Server = require('./models/server');

// Instance of the server
const server = new Server();

// Start the server
server.listen();