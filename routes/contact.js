const express= require('express')
const { AddContact, GetContact, DeleteContact, GetContacts, UpdateContacts } = require('../controllers/contact')


const ContactRoute= express.Router()

// method post
ContactRoute.post("/addContact", AddContact);
// method get
ContactRoute.get("/", GetContacts);

// method get by :id // req.params
ContactRoute.get("/:id", GetContact);

// method delete/:id req.params
ContactRoute.delete("/deleteContact/:id", DeleteContact);

//method update/:id req.params req.body
ContactRoute.put("/updateContact/:id", UpdateContacts);
module.exports=ContactRoute
