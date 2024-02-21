const app = require("express").Router();

const { addNewContact, getContact } = require('../../controllers/contact.controller')

app.get( '/',getContact)
app.post('/', addNewContact)
app.put( '/:contactId', (req,res) => {
    res.send('PUT request Successfull')
})
app.delete( '/:contactId', (req,res) => {
    res.send('DELETE request Successfull')
})

module.exports = app;