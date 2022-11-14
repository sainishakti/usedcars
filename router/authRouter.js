module.exports =app=>{
    const router = require("express").Router()
    const adminController = require("../controller/adminAuthcontroller.js")
    const {checkUserAuth} = require("../middleware/middleware.js") 
    
    const multer = require("multer")
   
    //updateadmin
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './upload')
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
    })
    var upload = multer({ storage: storage })
    router.post("/updateAdminProfile",upload.single('file'),adminController.Admin)
    router.post("/adminlogin",adminController.adminLogin)
    router.use('/Changepasswords', checkUserAuth)
    router.post("/Changepasswords",adminController.changeAdminPassword)
    router.post("/ForgotPassword",adminController.sendOtpEmail)
    //router.post("/setPassword",checkUserAuth)
    router.post("/setPassword",adminController.setPassword)

    
  
    app.use('/',router)
}