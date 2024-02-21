// const mongoose = require('mongoose')
const{ contact: Contact} = require('../models');

async function addNewContact(req, res) {
    let newContact = new Contact(req.body);

    try {
        const contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        res.status(500).send(err);
    }

}

async function getContact(req, res) {
    try{
        const contact = await Contact.find();
        res.json(contact);
    }catch (err) {
        res.status(500).send(err);
    }
}

async function getContactById(req, res) {
    try{
        const contact = await Contact.findById(req.params.contactId);
        res.json(contact);
    }catch(err) {
        res.status(500).send(err);
    }
}

module.exports = {
    addNewContact,
    getContact,
    getContactById
}