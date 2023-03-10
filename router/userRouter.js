module.exports =app=>{
    const router = require("express").Router()
    const usercontroller = require("../controllers/userController.js")
    const  {checkUserAuth}= require("../middleware/middleware.js")
   
  

  router.post("/Register",usercontroller.userRegister)
  router.post("/Login",usercontroller.userLogin)
  router.post("/ChangePassword",checkUserAuth,usercontroller.changeUserPassword)
  router.get("/userSellList",usercontroller.userSell)
  router.post("/userSellDelete",usercontroller.userSellDelete)
  router.get("/userList",usercontroller.userlist)
  router.get("/userListBuyer",usercontroller.userbuyer)
  router.post("/sendOtp",usercontroller.sendOtpEmail)
router.post("/verify",usercontroller.verifyOtp)
router.post("/setPassword",checkUserAuth,usercontroller.userPasswordReset)


    app.use('/user',router)
}