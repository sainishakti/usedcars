module.exports =app=>{
    const router = require("express").Router()
    const blogsController = require("../controller/blogController.js") 


    router.post("/createblog",blogsController.addblog);
    
  
    app.use('/',router)
}