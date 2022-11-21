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
            res.status(401).send({ "status": "401","success":false, "message": "Unable to Register" })
          }
        
    }