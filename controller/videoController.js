const videoModel =require("../models/videoModel.js")
const logoModel =require("../models/logoUploadmodel.js")

module.exports.addVideo = async (req, res) => {
   try {
    const user = await videoModel.findOne({_id:"637523ce79e7cc90dadfc4a4"})
console.log("user",user);
    if (!user ){
  const data = new videoModel({
        video: "https://adminportals.herokuapp.com/uploads/"+req?.file?.filename
            })
            await data.save()
           res.status(201).send({ "status":"200", "success":true, "message": "Add Video  Successfully",data})
            }else{
              const data = await videoModel.findOneAndUpdate({_id:"637523ce79e7cc90dadfc4a4"},
              {
                video: "https://adminportals.herokuapp.com/uploads/"+req?.file?.filename
              })
            if(data){
            res.send({ "status": "201","success":true, "message": "Replace Video Successfully",data })
            }}
            } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "401","success":false, "message": "Unable to Add Video" })
          }
        } 
//uploadLogo.........................................................
module.exports.addLogo = async (req, res) => {
    try{
      const user = await logoModel.findOne({_id:"637523b979e7cc90dadfc4a2"})
      console.log("user",user);
          if (!user ){
     const data = new  logoModel({
        logo:"https://adminportals.herokuapp.com/uploads/"+req?.file?.filename
             })
             await data.save()
      res.status(201).send({ "status":"200", "success":true, "message": "Add Logo  Successfully",data})
             }else{
         const data = await logoModel.findOneAndUpdate({_id:"637523b979e7cc90dadfc4a2"},
              {
                logo:"https://adminportals.herokuapp.com/uploads/"+req?.file?.filename
              })
            if(data){
            res.send({ "status": "201","success":true, "message": "Replace Video Successfully",data })
            }
 }
            }
             catch (error) {
             console.log(error)
             res.status(401).send({ "status": "401","success":false, "message": "Unable to Add Logo" })
           }
         } 
    //uploadMultipleimage........................................................//
    module.exports.addMutiple = async (req, res) => {
      try{
       const data = new  logoModel({
        images:req.files
               })
          await data.save()
        res.status(201).send({ "status":"200", "success":true, "message": "Add Logo  Successfully",data})
              }catch(error){
                res.status(401).send({ "status": "401","success":false, "message": "Something Went Wrong" })
              }
            }
//deleteimages.................................
            module.exports.deleteImages = async(req, res) => {
              const _id = req.body._id;
              console.log(_id);
              try{
              const data = await logoModel.findByIdAndDelete({_id:_id})
              if(data){
              res.send({ "status": "201","success":true, "message": "delete Images Successfully",data })
              }else{
                res.status(401).send({"status": "401","success":false, "message": "Unable To Deletet" })
              }
              }catch(error){
                res.status(401).send({"status": "401","success":false, "message":  "Something Went Wrong" })
                console.log("errorr",error);
            }
            }
            //edit..................................................
            module.exports.updateImages = async (req, res) => {
              try{
              const data = await logoModel.findOneAndUpdate({ _id:_id },
                {
              image:req.files
                })
              if(data){
              res.send({ "status": "201","success":true, "message": "update  Images  Successfully",data })
              }else{
                res.status(401).send({"status": "401","success":false, "message": "Unable To update" })
              }
              }catch(error){
                res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
                console.log("error",error);
            }
            }