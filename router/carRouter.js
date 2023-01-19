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
  //sellCar.................................................................
  router.post("/SellCar",upload.array('file',8),sellController.sellCar)
  router.get("/SellDetails",sellController.getSellDetails)
  

  //BuyCar.........................................................................
  router.post("/BuyCar",sellController.buyCar)
  //sellCity.......................................................................
  router.post("/CityCars",sellController.citySell)
  //BookCarInfo......................................................................
  router.post("/BookCar",sellController.bookCar)
  router.post("/SellCar",upload.single('file'),sellController.sellCar)
  router.get("/SellList",sellController.getSellList)
  router.get("/SellGet",sellController.getSellDetails)
  router.post("/SellFilter",sellController.getSellFilter)
  router.post("/SellDelete",sellController.deleteSell)
 
    app.use('/',router)
}