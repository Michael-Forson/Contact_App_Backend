const Contact = require("../models/contacts");
const asyncWrapper = require("../middleware/asyncWrapper");

const getAllContacts = asyncWrapper(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({ contacts });
});

const createContact = asyncWrapper(async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json(contact);
});

const getContactById = asyncWrapper(async (req, res) => {
  const { id: contactID } = req.params;
  const contact = await Contact.findOne({ _id: contactID });
  if (!contact) {
    return res.status(404).json({ msg: `No contact with:${contactID}` });
  }
  res.status(200).json({ contact});
});

const updateContact = asyncWrapper(async (req, res) => {
  const { id: contactID } = req.params;
  const contact = await Contact.findOneAndUpdate({ _id: contactID }, req.body, {
    new: true,
    runValidators: true,
  });
    res.status(200).json({id:contactID,data: contacts });

});
const deleteContact = asyncWrapper(async (req, res) => {
  const { id: contactID } = req.params;
  const contact = await Contact.findOneAndDelete({ _id: contactID });
  if (!contact) {
    return res.status(404).json({ msg: `No contact with ${contactID}` });
  }
  res.status(200).json(contact);
});
module.exports = {
  getAllContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
