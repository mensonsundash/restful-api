const app = require("express").Router();

app.get('/', (req, res) => {
    res.send(`V1: Node and express server is Running.`)
});

//routes according to modules
//contact module
app.use("/contact", require("./contact.routes"));

module.exports = app;