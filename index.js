const express = require('express');
const cors = require ('cors')
const compression = require('compression');
const app = express();
const PORT = process.env.PORT || 8001;
const customers = require('./routes/customers')
// Require and use routes


// Enable gzip compression for all responses
app.use(compression());
app.use(express.json());
app.use(cors());
require('dotenv').config();
// Your Express routes and middleware definitions go here



app.use('/', customers);



// Start the Express server
const db = require("./models");


db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port 8001");
  });
});
