module.exports =app=>{
    const router = require("express").Router()
    const jobsController = require("../controller/jobsController.js") 

    var storages = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './upload')
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
    })
    var upload = multer({ storage: storages })
    router.post("/createJobs",upload.single("file"),jobsController.createJobs);
    router.post("/updateJobs",upload.single("file"),jobsController.updateJobs);
    router.post("/deleteJobs",jobsController.deleteJobs);
    router.get("/getJobs",jobsController.getJobs);
    router.get("/getListJobs",jobsController.listJobs);
  
    app.use('/',router)
}