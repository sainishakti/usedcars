module.exports =app=>{
    const router = require("express").Router()
    const usercontroller = require("../controllers/userController.js")
   
  

  router.post("/Register",usercontroller.userRegister)
  router.post("/Login",usercontroller.userLogin)

    app.use('/user',router)
}