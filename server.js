const express = require("express");
const routes = require('./src/routes/index');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const dbConfig = require('./src/config/db.config');
//Initialize express
const app = express();

const PORT = 3000;

//mongoose connection
// mongoose.Promise = global.Promise;
// mongoose.connect(
//         `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, 
//         { useNewUrlParser: true, useUnifiedTopology: true}
// )
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.log(err));

require('./src/models'); // This will load your models

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