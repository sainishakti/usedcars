module.exports =app=>{
    const router = require("express").Router()
    const contactController = require("../controller/contactController.js") 
    const multer = require("multer")
//add
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './upload')
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
    })
    var upload = multer({ storage: storage })
    
    router.post("/addContact",upload.single('file'),contactController.addContact);
    //update..........................................
    var storages = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './upload')
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
    })
    var upload = multer({ storage: storages })
    
    router.post("/updateContact",upload.single('file'),contactController.updateContact);
    router.post("/deleteContact",contactController.deleteform);
    router.get("/listContact",contactController.listForm);
    router.post("/addReply",contactController.addReply);
  
    app.use('/',router)
}