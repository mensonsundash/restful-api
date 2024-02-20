const express = require("express");
const routes = require('./src/routes/index');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Initialize express
const app = express();

const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//routes
app.use('/api', routes);


app.get('/', (req, res) => {
    res.send(`Node and express server is Running on port ${PORT}.`)
});

//set port and listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})