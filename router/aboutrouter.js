module.exports =app=>{
    const router = require("express").Router()
    const aboutController = require("../controller/aboutController.js") 
    const multer = require("multer")
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'upload')
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
    })
    var upload = multer({ storage: storage })
    router.post("/aboutUs",upload.single('file'),aboutController.addaboutUs);


    app.use('/',router)
}