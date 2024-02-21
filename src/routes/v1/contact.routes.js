const app = require("express").Router();

const { addNewContact, getContact, getContactById, updateContact, deleteContact } = require('../../controllers/contact.controller')

app.get( '/', getContact);
app.get('/:contactId', getContactById)
app.post('/', addNewContact);
app.put( '/:contactId', updateContact)
app.delete( '/:contactId', deleteContact)

module.exports = app;