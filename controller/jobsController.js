
const jobsModel =require("../models/jobsModel.js")
//Create Jobs
module.exports.createJobs = async (req, res) => {
    const { title ,description ,jobType , jobLocation , experience , skill } = req.body

if ( title && description && jobType && jobLocation && experience && skill ) {
          try {
    const doc = new jobsModel({
              title: title,
              description: description,
              jobType:jobType,
              jobLocation:jobLocation,
              experience:experience,
              skill : skill,
            })
            await doc.save()
            res.status(201).send({ "status":"200", "success":true, "message": "Create Jobs Successfully" })
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
    const { title ,description ,jobType , jobLocation , experience , skill,_id} = req.body
    try{
    const data = await jobsModel.findByIdAndUpdate({ _id: _id },
      {
        title: title,
        description: description,
        jobType:jobType,
        jobLocation:jobLocation,
        experience:experience,
        skill : skill,
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