module.exports =app=>{
    const router = require("express").Router()
    const blogsController = require("../controller/blogController.js") 
    
    const multer = require("multer")
   
    //updateadmin
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './uploads')
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
    })
    var upload = multer({ storage: storage })

    router.post("/createblog",upload.single('file'),blogsController.addblog);
    router.post("/updateblog",upload.single('file'),blogsController.updateBlog);
    router.get("/detailsblog",blogsController.detailsBlog);
    router.post("/deleteblog",blogsController.deleteBlog);
    router.get("/listblogs",blogsController.listBlog);
    router.post("/commentBlog",blogsController.addblogComment);
    router.get("/getComment",blogsController.listComment);
    router.post("/deleteComment",blogsController.deleteComment);
    
  
    app.use('/',router)
}