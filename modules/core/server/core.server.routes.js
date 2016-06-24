// server side routes

'use strict'
var controller = require("./core.server.controller");
module.exports = function(app){
    app
        .route('/')
        .get(controller.getContacts)
        .post(controller.createContact)
     app
         .route('/contact/:id') // here id is route params
         .get(controller.getContactById)
         .put(controller.updateContactById)
         .delete(controller.deleteContactById)
}