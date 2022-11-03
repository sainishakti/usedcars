module.exports =app=>{
    const router = require("express").Router()
    const jobsController = require("../controller/jobsController.js") 


    router.post("/createJobs",jobsController.createJobs);
    router.post("/updateJobs",jobsController.updateJobs);
    router.post("/deleteJobs",jobsController.deleteJobs);
    router.get("/getJobs",jobsController.getJobs);
    router.get("/getListJobs",jobsController.listJobs);
  
    app.use('/',router)
}