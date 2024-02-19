// import expres from 'express';
const express = require("express");

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Node and express server is Running on port ${PORT}.`)
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}.`);
})