module.exports =app=>{
    const router = require("express").Router()
    const contactUsController = require("../controller/contactusController.js") 


    router.post("/addContactUs",contactUsController.addContactus);
    router.post("/deleteContactUs",contactUsController.deleteform);
    router.get("/GetListUs",contactUsController.listForm);
    router.post("/addReply",contactUsController.addReply);




    app.use('/',router)
}