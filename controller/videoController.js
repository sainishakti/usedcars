const videoModel =require("../models/videoModel.js")
const logoModel =require("../models/logoUploadmodel.js")

module.exports.addVideo = async (req, res) => {
   try {
    // console.log("data",req.file.fileName);
    const data = new videoModel({
        video: req?.file?.filename
            })
            await data.save()
            if(data){
            
                res.status(201).send({ "status":"200", "success":true, "message": "Add Video  Successfully",data})
            }else{
                res.status(401).send({ "status": "401","success":false, "message": "Unable to Add Video" })
            }
            } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "401","success":false, "message": "Unable to Add Video" })
          }
        } 
//uploadLogo.........................................................
module.exports.addLogo = async (req, res) => {
    try {
     const data = new  logoModel({
        logo: req?.file?.filename
             })
             await data.save()
             if(data){
               res.status(201).send({ "status":"200", "success":true, "message": "Add Logo  Successfully",data})
             }else{
                 res.status(401).send({ "status": "401","success":false, "message": "Unable to Add Logo" })
             }
             } catch (error) {
             console.log(error)
             res.status(401).send({ "status": "401","success":false, "message": "Unable to Add Logo" })
           }
         } 
     