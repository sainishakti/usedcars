module.exports =app=>{
    const router = require("express").Router()
    const jobsController = require("../controller/jobsController.js") 
    const multer = require("multer")
    // var storages = multer.diskStorage({
    //     destination: function (req, file, cb) {
    //       cb(null, './uploads')
    //     },
    //     filename: function (req, file, cb) {
    //       cb(null, file.originalname)
    //     }
    // })
    // var upload = multer({ storage: storages })
    router.post("/createJobs",jobsController.createJobs);
    router.post("/updateJobs",jobsController.updateJobs);
    router.post("/deleteJobs",jobsController.deleteJobs);
    router.get("/getJobs",jobsController.getJobs);
    router.get("/getListJobs",jobsController.listJobs);
  
    app.use('/',router)
}