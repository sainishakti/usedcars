module.exports =app=>{
    const router = require("express").Router()
    const multer = require('multer')
    const blogController = require("../controllers/blogController.js")
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './uploads')
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
    })
    var upload = multer({ storage: storage })
   
router.post("/AddBlog",upload.single('file'),blogController.blogAdd)
router.get("/BlogDetails",blogController.getBlogDetails)
router.post("/BlogDelete",blogController.blogDelete)
router.post("/BlogUpdate",upload.single('file'),blogController.blogUpdate)
  

    app.use('/',router)
}