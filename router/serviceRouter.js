module.exports =app=>{
    const router = require("express").Router()
    const serviceController = require("../controller/serviceController.js") 


    router.post("/addsevice",serviceController.createJobs);
   
  
    app.use('/',router)
}