module.exports =app=>{
    const router = require("express").Router()
    const blogsController = require("../controller/blogController.js") 


    router.post("/createblog",blogsController.addblog);
    router.post("/updateblog",blogsController.updateBlog);
    router.post("/detailsblog",blogsController.detailsBlog);
    router.post("/deleteblog",blogsController.deleteBlog);
    
  
    app.use('/',router)
}