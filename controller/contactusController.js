const contactusModel =require("../models/contactusModel.js")
const replyModel =require("../models/replyformModel.js")
//Create Jobs
module.exports.addContactus = async (req, res) => {
    const { TopSliderText ,OurContactDetailHere ,OurEmailDetailHere , OurLocation  } = req.body
  const user = await contactusModel.findOne({_id:"63747cb4f4b86b457124b827"})
  console.log("user",user);
          if (!user ){
   try {
    const data = new contactusModel({
        TopSliderText: TopSliderText,
        OurContactDetailHere: OurContactDetailHere,
        OurEmailDetailHere:OurEmailDetailHere,
        OurLocation:OurLocation,
            })
            await data.save()
            res.status(201).send({ "status":"200", "success":true, "message": "Add contactUs  Successfully",data})
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "401","success":false, "message": "Unable to Add uscontact" })
          }
        } else {
          const data = await contactusModel.findOneAndUpdate({_id:"63747cb4f4b86b457124b827"},
                {
                  TopSliderText: TopSliderText,
                  OurContactDetailHere: OurContactDetailHere,
                  OurEmailDetailHere:OurEmailDetailHere,
                  OurLocation:OurLocation,
                })
              if(data){
              res.send({ "status": "201","success":true, "message": "Replace aboutUs Successfully",data })
              }}
   }
  //delete..........................................................//
  module.exports.deleteform = async (req, res) => {
    const {_id} = req.body;
    console.log("_id...............=>",_id);
    try{
    const data = await contactusModel.findByIdAndDelete({_id:_id})
    if(data){
    res.send({ "status": "201","success":true, "message": "Delete ContactUs Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
  //listContact..........................................
  module.exports.listForm = async (req, res) => {

    try{
    const data = await contactusModel.find()
    if(data){
    res.send({ "status": "201","success":true, "message": "List Get  Contact Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
  //reply.............................
  module.exports.addReply = async (req, res) => {
    const { userId,replyMessage} = req.body

   try {
    const data = new replyModel({
      userId: userId,
      replyMessage:replyMessage,
            })
            await data.save()
      if(data){
        res.send({ "status": "201","success":true, "message": "Add Reply Successfully",data })
      }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
        
   }
    }