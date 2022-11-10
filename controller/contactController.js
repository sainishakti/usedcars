const contactModel =require("../models/conactModel.js")
//Create Jobs
module.exports.addContact = async (req, res) => {
    const { name ,email ,phoneNumber , message , subject } = req.body

if ( name && email  && phoneNumber && message &&subject) {
          try {
    const doc = new contactModel({
      name: name,
      email: email,
      phoneNumber:phoneNumber,
      message:message,
      image:req?.file?.filename
            })
            await doc.save()
            res.status(201).send({ "status":"200", "success":true, "message": "Add contact  Successfully" })
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "401","success":false, "message": "Unable to contact" })
          }
        } else {
    res.status(401).send({"status": "401","success":false, "message": "All fields are required" })
      }
    }
  //updateContact............................................//
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