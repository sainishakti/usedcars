module.exports =app=>{
    const router = require("express").Router()
    const videoController = require("../controller/videoController.js") 
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
    router.post("/uploadVideo",upload.single('file'),videoController.addVideo);
    router.post("/uploadLogo",upload.single('file'),videoController.addLogo);
  




    app.use('/',router)
}