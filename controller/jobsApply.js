const applyModel =require("../models/JobsApply.js")
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
//Create Jobs
module.exports.apply = async (req, res) => {
    const { jobsId,email ,name ,levelOfeducation , experience , skill , exceptedsalary,information } = req.body

    try {
    const data = new applyModel({
        jobsId: jobsId,
        name:name,
        email:email,
        levelOfeducation:levelOfeducation,
        experience:experience,
        skill : skill,
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
 //replyJob......................................
 module.exports.sendReplyEmail = async (req, res) => {
  const { email,reply } = req.body
  if (email) {
    const user = await adminModel.findOne({ email: email })
    if (user) {
   const data = await adminModel.findOneAndUpdate({email},{ otp:otp})
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", 
        secure: false, 
        port: 587, 
        requireTLS:true, 
        auth: {
            user: "shakti.ingenioushitech@gmail.com",
            pass: "saini@2525"
        }
    });
    var mailOptions = {
      from:  "shakti.ingenioushitech@gmail.com", 
      to: email, 
      subject: 'Sending Otp Your Mail',
      text: ""+reply 
       };
  
// send mail with defined transport object
   transporter.sendMail(mailOptions, function(error, info){
      if(error){
      console.log(error);
      }else{
        console.log(info);
        const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
        res.send({ "status": "201","success":true, "message": "Reply Send Your mail Successfully"})
      }
    })
       }
    else {
      res.status(401).send({"status": "401","success":false, "message":  "Email doesn't exists"   }) 
  }
    }
  else {
    res.status(401).send({"status": "401","success":false, "message":  "Email Field is Required"  })
  }
  }