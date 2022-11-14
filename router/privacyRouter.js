module.exports =app=>{
    const router = require("express").Router()
    const privacyController = require("../controller/policyController.js") 


    router.post("/addPrivacypolicy",privacyController.addpolicy);
    router.post("/updatePrivacypolicy",privacyController.updateprivacy);
    router.get("/GetPrivacypolicy",privacyController.GetPrivacy);
    router.post("/DeletePrivacypolicy",privacyController.deletePrivacy);




    app.use('/',router)
}