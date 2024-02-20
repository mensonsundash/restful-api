const mongoose = require('mongoose')
const ContactSchema = require('../models/contact.model')

const Contact = mongoose.model('Contact', ContactSchema);

async function addNewContact(req, res) {
    let newContact = new Contact(req.body);

    try {
        const contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        res.status(500).send(err);
    }

}

module.exports = {
    addNewContact
}