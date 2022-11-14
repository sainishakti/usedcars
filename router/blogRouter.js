module.exports =app=>{
    const router = require("express").Router()
    const blogsController = require("../controller/blogController.js") 


    router.post("/createblog",blogsController.addblog);
    router.post("/updateblog",blogsController.updateBlog);
    router.get("/detailsblog",blogsController.detailsBlog);
    router.get("listblog",blogsController.listBlog);
    router.post("/deleteblog",blogsController.deleteBlog);
    
  
    app.use('/',router)
}