const { Schema, model } = require("mongoose");

const contact = new Schema({
  firstName: String,
  lastName: String,
  phone: Number,
  email: String,
  company: String,
  job_title: String,
});

const Contact = model("Contact", contact, "Contacts");
module.exports = Contact;
