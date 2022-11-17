const videoModel =require("../models/videoModel.js")
const logoModel =require("../models/logoUploadmodel.js")

module.exports.addVideo = async (req, res) => {
   try {
    const user = await videoModel.findOne({_id:"637523ce79e7cc90dadfc4a4"})
console.log("user",user);
    if (!user ){
  const data = new videoModel({
        video: "https://adminportals.herokuapp.com/upload/"+req?.file?.filename
            })
            await data.save()
           res.status(201).send({ "status":"200", "success":true, "message": "Add Video  Successfully",data})
            }else{
              const data = await videoModel.findOneAndUpdate({_id:"637523ce79e7cc90dadfc4a4"},
              {
                video: "https://adminportals.herokuapp.com/upload/"+req?.file?.filename
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
     