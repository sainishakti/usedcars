module.exports =app=>{
    const router = require("express").Router()
    const testController = require("../controller/testController.js") 
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
    router.post("/addtestimonial",upload.single('file'),testController.addtestimoinal);
    router.get("/listTestimonial",testController.listtest);
    router.post("/deleteTestimonial",testController.deletetest);
    




    app.use('/',router)
}