
const jobsModel =require("../models/jobsModel.js")
//Create Jobs
module.exports.createJobs = async (req, res) => {
    const { imageText,ProfileName ,RequiredSkillsAndCertificateDetails ,JD , jobLocation , MinSalary , MaxSalary } = req.body

if ( imageText && ProfileName && RequiredSkillsAndCertificateDetails && JD && jobLocation && MinSalary && MaxSalary ) {
          try {
    const data = new jobsModel({
      ProfileName: ProfileName,
      RequiredSkillsAndCertificateDetails: RequiredSkillsAndCertificateDetails,
      JD:JD,
      jobLocation:jobLocation,
      MinSalary:MinSalary,
      MaxSalary : MaxSalary,
      imageProfile:req?.files?.filename,
      imageText:imageText
            })
            await data.save()
            res.status(201).send({ "status":"200", "success":true, "message": "Create Jobs Successfully",data })
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "401","success":false, "message": "Unable to Register" })
          }
        } else {
    res.status(401).send({"status": "401","success":false, "message": "All fields are required" })
      }
    }
//updateJobs.................................................................//
  module.exports.updateJobs = async (req, res) => {
    const {imageText, ProfileName ,RequiredSkillsAndCertificateDetails ,JD,_id, jobLocation , MinSalary , MaxSalary } = req.body
    try{
    const data = await jobsModel.findByIdAndUpdate({ _id: _id },
      {
        ProfileName: ProfileName,
        RequiredSkillsAndCertificateDetails: RequiredSkillsAndCertificateDetails,
        JD:JD,
        jobLocation:jobLocation,
        MinSalary:MinSalary,
        MaxSalary : MaxSalary,
        imageProfile:req?.files?.filename,
        imageText:imageText
      })
    if(data){
    res.send({ "status": "201","success":true, "message": "update Jobs Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To update" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
  //deleteJobs....................................................................
  module.exports.deleteJobs = async (req, res) => {
    const {_id} = req.body;
    console.log("_id...............=>",_id);
    try{
    const data = await jobsModel.findByIdAndDelete({_id:_id})
    if(data){
    res.send({ "status": "201","success":true, "message": "Delete Jobs Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
  //JobsList..............................................................//
  module.exports.listJobs = async (req, res) => {
  
    try{
    const data = await jobsModel.find()
    if(data){
    res.send({ "status": "201","success":true, "message": "Get List  Jobs Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
  //GetJob.......................................................................//
  module.exports.getJobs = async (req, res) => {
    const _id = req.body;
    console.log("_id...............=>",_id);
    try{
    const data = await jobsModel.find({_id:_id})
    if(data){
    res.send({ "status": "201","success":true, "message": "Get List  Jobs Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }