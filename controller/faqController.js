const faqModel =require("../models/faqModel.js")
//Create services....................
module.exports.addFaq = async (req, res) => {
    const { question , answer } = req.body
try {
    const data = new faqModel({
        question:question,
        answer:answer,
            })
            await data.save()
            res.status(201).send({ "status":"200", "success":true, "message": "Add Faq  Successfully",data})
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "401","success":false, "message": "Unable to Faq Add" })
          }
    }
    //updateService............................................................/
module.exports.updateFaq = async (req, res) => {
    const { question , answer,_id } = req.body
    console.log(req.body);
    try{
    const data = await faqModel.findByIdAndUpdate({ _id:_id },
      {
        question:question,
        answer:answer,
      })
    if(data){
    res.send({ "status": "201","success":true, "message": "update Faq Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To update" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
  }
  }
  //list..................................
  module.exports.listFaq = async (req, res) => {
  try{
    const data = await faqModel.find()
    if(data){
    res.send({ "status": "201","success":true, "message": "Get List  Faq Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
  }
  }
  
//faqdetails....................................................
  module.exports.detailsFaq = async (req, res) => {
    const { _id }  = req.query;
    console.log("id",_id);
    try{
    const data = await faqModel.findById({_id:_id})
    if(data){
    res.send({ "status": "201","success":true, "message": "Get  faq Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
  }
  }

  //deletefaq...............................
module.exports.deleteFaq = async (req, res) => {
    const  _id  = req.body._id
    console.log("id",_id);
    try{
    const data = await faqModel.findByIdAndDelete({_id:_id})
    if(data){
    res.send({ "status": "201","success":true, "message": "Delete faq Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
  }
  }