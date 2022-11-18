module.exports =app=>{
    const router = require("express").Router()
    const videoController = require("../controller/videoController.js") 
    const multer = require("multer")
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './uploads')
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
    })
    var upload = multer({ storage: storage })
    router.post("/uploadVideo",upload.single('file'),videoController.addVideo);
    router.post("/uploadLogo",upload.single('file'),videoController.addLogo);
    var storages= multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, './uploads')
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname)
      }
  })
  var uploads = multer({ storage: storages })
  router.post("/uploadImages",uploads.array('file',10),videoController.addMutiple);
  router.post("/updatedImages",uploads.array('file',10),videoController.updateImages);
  router.post("/deleteImages",videoController.deleteImages);
  




    app.use('/',router)
}