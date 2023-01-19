module.exports =app=>{
    const router = require("express").Router()
    const admincontroller = require("../controllers/adminController.js")
    const {checkUserAuth} = require("../middleware/middleware.js")
    
   
  
  router.post("/Login",admincontroller.adminLogin)
  router.post("/sellList",admincontroller.getSellList)
  router.post("/sellDelete",admincontroller.deleteSell)
  router.post("/UserList",admincontroller.getUserList)
  router.post("/UserDelete",admincontroller.deleteUser)
  router.post("/BlogList",admincontroller.getBlogList)
  router.use('/Changepasswords', checkUserAuth)
  router.post("/Changepasswords",admincontroller.changeAdminPassword)


    app.use('/Admin',router)
}