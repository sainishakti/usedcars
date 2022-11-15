const contactModel =require("../models/conactModel.js")
const replyModel =require("../models/replyformModel.js")
//Create Jobs
module.exports.addContact = async (req, res) => {
    const { name ,email ,phoneNumber , message , subject } = req.body
    if ( name && email  && phoneNumber && message && subject) {
   try {
    const data = new contactModel({
      name: name,
      email: email,
      phoneNumber:phoneNumber,
      message:message,
      image:req?.file?.filename
            })
            await data.save()
            res.status(201).send({ "status":"200", "success":true, "message": "Add contact  Successfully",data})
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "401","success":false, "message": "Unable to contact" })
          }
        } else {
    res.status(401).send({"status": "401","success":false, "message": "All fields are required" })
      }
    }
  //updateContact............................................//
  module.exports.updateContact = async (req, res) => {
    const { name ,email ,phoneNumber , message , subject ,_id} = req.body
    try{
    const data = await contactModel.findByIdAndUpdate({ _id: _id },
      {
      name: name,
      email: email,
      phoneNumber:phoneNumber,
      message:message,
      subject:subject,
      image:req?.file?.filename
      })
    if(data){
    res.send({ "status": "201","success":true, "message": "update contactForm Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To update" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
  //delete..........................................................//
  module.exports.deleteform = async (req, res) => {
    const {_id} = req.body;
    console.log("_id...............=>",_id);
    try{
    const data = await contactModel.findByIdAndDelete({_id:_id})
    if(data){
    res.send({ "status": "201","success":true, "message": "Delete Contact Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
  //listContact..........................................
  module.exports.listForm = async (req, res) => {

    try{
    const data = await contactModel.find()
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