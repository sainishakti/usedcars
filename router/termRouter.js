module.exports =app=>{
    const router = require("express").Router()
    const termController = require("../controller/termController.js") 


    router.post("/addTermConditions",termController.addtermConditions);
    router.post("/updateTermConditions",termController.updateConditions);
    router.get("/GetTermConditions",termController.GetConditions);
    router.post("/DeleteTermConditions",termController.deleteConditions);




    app.use('/',router)
}