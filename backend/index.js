const express = require("express");
const db = require("./mongo_client");
const cors = require("cors");
const Contact = require("./shema");
const app = express();

app.use(cors());
app.use(express.json());

// For adding the contacts
app.post("/contacts", async (req, res) => {
  const data = req.body;
  const { firstName, lastName, phone, email, company, job_title } = data;
  const newContact = new Contact({
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    email: email,
    company: company,
    job_title: job_title,
  });

  try {
    await newContact.save();
    res.status(201).json({
      message: "contact has been created successfully",
      contact: newContact,
    });
  } catch (error) {
    console.log("Got an error: ", error);
    res
      .status(500)
      .json({ message: "error while creating contact", error: error.message });
  }
});

// For fetching all the contacts
app.get("/contacts", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // get the page
    const pageSize = parseInt(req.query.pageSize) || 5; // getting the size of each page

    const skip = (page - 1) * pageSize; // the number of contacts we need to skip to reach the required page

    const contacts = await Contact.find() // fetch the data accordingly
      .skip(skip)
      .limit(pageSize)
      .collation({ locale: "en", strength: 2 })
      .sort({ firstName: 1 });

    const totalContacts = await Contact.countDocuments();
    const totalPages = Math.ceil(totalContacts / pageSize);
    res.status(200).json({
      page,
      pageSize,
      totalPages,
      totalContacts,
      contacts,
    });
  } catch (error) {
    console.log("Got an error:", error);
    res
      .status(500)
      .json({ message: "Error fetching contacts", error: error.message });
  }
});

// This is for updating the contact using id
app.put("/contacts", async (req, res) => {
  try {
    const { id } = req.query;
    const { firstName, lastName, phone, email, company, job_title } = req.body;
    console.log(firstName, lastName, phone, email, company, job_title, id);

    const updatedcontact = await Contact.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        phone,
        email,
        company,
        job_title,
      },
      { new: true }
    );
    if (!updatedcontact) {
      return res.status(404).json({ message: "contact not found" });
    }
    res.status(200).json({
      message: "contact updated successfully",
    });
  } catch (error) {
    console.error("got error while updating the contact:", error);
    res.status(500).json({
      message: "got error while updating contact",
      error: error.message,
    });
  }
});

// This is to delete the contact using the specific id
app.delete("/contacts", async (req, res) => {
  try {
    const { id } = req.query;
    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      return res.status(404).json({ message: "contact has been not found" });
    }
    res.status(200).json({
      message: "contact is deleted successfully",
      contact: deletedContact,
    });
  } catch (error) {
    console.error("error while deleting contact:", error);
    res
      .status(500)
      .json({ message: "error while deleting contact", error: error.message });
  }
});

// the server has started on the port 3000
app.listen(3000, () => {
  console.log("App is listening on the port 3000");
});
