module.exports =app=>{
    const router = require("express").Router()
    const serviceController = require("../controller/serviceController.js") 
    const multer = require("multer")
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './uploads')
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
    })
    var upload = multer({ storage: storage })
    router.post("/addservice",upload.single('file'),serviceController.addServices);
    router.post("/updateservice",upload.single('file'),serviceController.updateServices);
    router.get("/listservices",serviceController.listServices);
    router.get("/detailServices",serviceController.detailsServices);
    router.post("/deleteServices",serviceController.deleteServices);
   
  
  
    app.use('/',router)
}