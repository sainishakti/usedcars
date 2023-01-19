module.exports =app=>{
    const router = require("express").Router()
    const admincontroller = require("../controllers/adminController.js")
    const {checkUserAuth} = require("../middleware/middleware.js")
    
   
  
  router.post("/Login",admincontroller.adminLogin)
  router.get("/sellList",admincontroller.getSellList)
  router.post("/sellDelete",admincontroller.deleteSell)
  router.get("/UserList",admincontroller.getUserList)
  router.post("/UserDelete",admincontroller.deleteUser)
  router.get("/BlogList",admincontroller.getBlogList)
  router.use('/Changepasswords', checkUserAuth)
  router.post("/Changepasswords",admincontroller.changeAdminPassword)
  router.get("/BuyList",admincontroller.getBuyList)
  router.post("/BuyDelete",admincontroller.deleteBuy)

 


    app.use('/Admin',router)
}