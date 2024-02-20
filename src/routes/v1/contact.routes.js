const app = require("express").Router();

const { addNewContact } = require('../../controllers/contact.controller')

app.get( '/', (req,res, next) => {
    // middleware
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
    next();
    }, (req, res, next) => {
        res.send('GET request Successfull')
    }
)

app.post('/', addNewContact)

app.put( '/:contactId', (req,res) => {
    res.send('PUT request Successfull')
})

app.delete( '/:contactId', (req,res) => {
    res.send('DELETE request Successfull')
})

module.exports = app;