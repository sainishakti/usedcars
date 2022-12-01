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
      image:"https://adminportals.herokuapp.com/uploads/"+req?.file?.filename
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
      image:"https://adminportals.herokuapp.com/uploads/"+req?.file?.filename
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
  //totaluser............................................................
module.exports.totalUser = async (req, res) => {
  try{
    const totaluser = await contactModel.count()
    res.status(201).send({"status": "201","success":true, "message": "Get Total User",totaluser })
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
  }
   }
//sendreply..............................................................
   module.exports.sendReplyEmail = async (req, res) => {
    const { email,reply } = req.body
    if (email) {
      const user = await contactModel.findOne({ email: email })
      if (user) {
     const data = await contactModel.findOneAndUpdate({email},{ otp:otp})
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