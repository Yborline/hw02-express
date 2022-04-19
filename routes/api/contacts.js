const express = require("express");
// const contacts = require("../../models/contacts.json");
// const { v4: uuidv4 } = require("uuid");
const router = express.Router();
// const Joi = require("joi");

const { addPostValidation } = require("../../validationMiddleware");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/controller");

router.get("/", listContacts);

router.get("/:contactId", getContactById);

router.post("/", addPostValidation, addContact);

router.delete("/:contactId", removeContact);

router.put("/:contactId", addPostValidation, updateContact);

module.exports = { contactsRouter: router };

// router.patch("/:contactId", async (req, res, next) => {
//   const { contactId } = req.params;
//   const { name, email, phone } = req.body;
//   contacts.forEach((contact) => {
//     if (contact.id === contactId) {
//       if (email) {
//         contact.email = email;
//       }
//       if (name) {
//         contact.name = name;
//       }
//       if (phone) {
//         contact.phone = phone;
//       }
//     }
//   });
//   res.status(201).json({
//     status: "success",
//     code: 201,
//     result: contacts,
//   });
// });
