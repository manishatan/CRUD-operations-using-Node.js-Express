'use strict'
var contacts =[];
var bodyParser = require('body-parser');
module.exports.getContacts = function(req,res){
    console.log('Received Request');
   /* res.json({
        name:"Alex Martin",
        age:21
    });*/
    res.json(contacts);
}
module.exports.createContact = function(req,res){
    var contact = {};
    contact.id=Math.floor((Math.random() * (1000-1)) + 1);
    contact.firstName = req.body.firstName || '';
    contact.lastName= req.body.lastName || '';
    contact.age = req.body.age || 0;
    contacts.push(contact);
    res.json(contacts);
}
module.exports.getContactById = function(req,res){
    var id= req.params.id,
        currContact;
    if(!id)
    {
        res.json("Invalid ID: Please try again")
    }
  contacts.forEach(function(contact){
      if(contact.id ==id)
      {
          currContact = contact;
          return;
      }
  });
    res.json(currContact);
}

module.exports.updateContactById = function(req,res){
    var id = req.params.id,
        currContact;
    if(!id)
    {
        res.json("Invalid ID: Please try again")
    }
    contacts.forEach(function(contact){
        if(contact.id == id)
        {
            contact.firstName = req.body.firstName;
            contact.lastName = req.body.lastName ;
            contact.age= req.body.age;
            res.json(contact);        }
    });

}
module.exports.deleteContactById = function(req,res){
    var id = req.params.id,
        currContact;
    if(!id)
    {
        res.json("Invalid ID: Please try again")
    }
    contacts.forEach(function(contact){
        if(contact.id == id)
        {
            contacts.pop(contact);
                   return;
        }
    });
    res.json(contacts);
}