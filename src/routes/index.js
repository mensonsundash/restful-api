const app = require('express').Router();

app.get('/', (req, res) => {
    res.send(`Routes: Node and express server is Running.`)
});

//routes v1
app.use('/v1', require("./v1/index"));

module.exports = app;