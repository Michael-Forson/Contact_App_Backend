const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contacts.js");
router.route("/").get(getAllContacts).post(createContact);
router
  .route("/:id")
  .get(getContactById)
  .patch(updateContact)
  .delete(deleteContact);

module.exports = router;
