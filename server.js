const express = require("express");
const routes = require('./src/routes/index');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const dbConfig = require('./src/config/db.config');
//Initialize express
const app = express();

const PORT = process.env.PORT || 3000;

// This will load your models
require('./src/models');

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//serving static files
app.use(express.static('resources/static/assets/images'))

//routes
app.use('/api', routes);


app.get('/', (req, res) => {
    res.send(`Node and express server is Running on port ${PORT}.`)
});

//set port and listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})