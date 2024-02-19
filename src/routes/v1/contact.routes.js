const app = require("express").Router();

app.get( '/', (req,res, next) => {
    // middleware
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
    next();
    }, (req, res, next) => {
        res.send('GET request Successfull')
    }
)

app.post( '/', (req,res) => {
    res.send('POST request Successfull')
})

app.put( '/:contactId', (req,res) => {
    res.send('PUT request Successfull')
})

app.delete( '/:contactId', (req,res) => {
    res.send('DELETE request Successfull')
})

module.exports = app;