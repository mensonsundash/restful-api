const mongoose = require('mongoose');

const Contact = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
});

Contact.statics.findById = function (id) {
    return this.findOne({ _id: id });
};

Contact.statics.deleteById = function (id) {
    return this.deleteOne({ _id: id });
};

module.exports = Contact;