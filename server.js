const express = require("express");
const routes = require('./src/routes/index');

const PORT = 3000;

//Initialize express
const app = express();

app.get('/', (req, res) => {
    res.send(`Node and express server is Running on port ${PORT}.`)
});

//routes
app.use('/api', routes);

//set port and listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})