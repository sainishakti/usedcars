const applyModel =require("../models/JobsApply.js")
//Create Jobs
module.exports.apply = async (req, res) => {
    const { jobsId,email ,name ,levelOfeducation , experience , programs , exceptedsalary,information } = req.body

    try {
    const data = new applyModel({
        jobsId: jobsId,
        name:name,
        email:email,
        levelOfeducation:levelOfeducation,
        experience:experience,
        programs : programs,
        exceptedsalary:exceptedsalary,
        information:information
         })
        await data.save()
            res.status(201).send({ "status":"200", "success":true, "message": "Create JobsApply Successfully",data })
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "401","success":false, "message": "Unable to Apply" })
          }
        }

        //jobAppyGet
  module.exports.listJobsApply= async (req, res) => {
   try{
          const data = await applyModel.find()
          if(data){
          res.send({ "status": "201","success":true, "message": "Get List  JobsApply Successfully",data })
          }else{
            res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
          }
          }catch(error){
            res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
            console.log("error",error);
      }
        }
//getapply,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
module.exports.getJobsApply= async (req, res) => {
  try{
         const{_id} = req.query;
         const data = await applyModel.find({_id:_id})
         if(data){
         res.send({ "status": "201","success":true, "message": "Get List  JobsApply Successfully",data })
         }else{
           res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
         }
         }catch(error){
           res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
           console.log("error",error);
     }
       }
  //deleteJoBApply
  module.exports.deleteJobsApply = async (req, res) => {
    const {_id} = req.body;
    console.log("_id...............=>",_id);
    try{
    const data = await applyModel.findByIdAndDelete({_id:_id})
    if(data){
    res.send({ "status": "201","success":true, "message": "Delete JobsApply Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }