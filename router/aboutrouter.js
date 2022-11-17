module.exports =app=>{
    const router = require("express").Router()
    const aboutController = require("../controller/aboutController.js") 
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
    router.post("/aboutUs",upload.single('file'),aboutController.addaboutUs);
    router.post("/aboutusUpdate",upload.single('file'),aboutController.updateAboutus);
    router.get("/aboutusList",aboutController.listaboutUs);
    router.get("/detailsAbotus",aboutController.detailsAboutUs);
    router.post("/aboutusDelete",aboutController.deleteAboutUs);



    app.use('/',router)
}