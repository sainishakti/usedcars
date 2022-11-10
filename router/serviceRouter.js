module.exports =app=>{
    const router = require("express").Router()
    const serviceController = require("../controller/serviceController.js") 
    const multer = require("multer")
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './upload')
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
    })
    var upload = multer({ storage: storage })
    router.post("/addsevice",upload.single('file'),serviceController.addServices);
   
  
    app.use('/',router)
}