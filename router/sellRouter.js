module.exports =app=>{
    const router = require("express").Router()
    const multer = require('multer')
    const sellController = require("../controllers/carController.js")
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './uploads')
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
    })
    var upload = multer({ storage: storage })
   
  

  router.post("/SellCar",upload.single('file'),sellController.sellCar)
  

    app.use('/',router)
}