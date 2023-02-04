const  UserModel =require("../models/userModel.js")
const  UserSell =require("../models/carModel.js")
const  Userbuyer =require("../models/buyModel.js")
const  bcrypt =require("bcrypt")
const  jwt =require("jsonwebtoken")
const nodemailer = require("nodemailer")
var smtpTransport = require('nodemailer-smtp-transport');


//signup..........................................................................
module.exports.userRegister = async (req, res) => {
    const { mobile,email, password, confirmPassword,name} = req.body
    const user = await UserModel.findOne({ email: email })
    if (user) {
      res.send({ "status": "failed", "message": "Email already exists" })
    }
    else {
      if ( email && password && confirmPassword && mobile ) {
        if (password === confirmPassword) {
          try {
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)
            const doc = new UserModel({
              email: email,
              password: hashPassword,
              mobile : mobile,
              name:name,
            })
            await doc.save()
            res.status(201).send({ "status":200, "success":true, "message": "Registration Successfully" })
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": 401,"success":false, "message": "Unable to Register" })
          }
        } else {
            res.status(401).send({ "status": 401,"success":false,  "message": "Password and Confirm Password doesn't match" })
        }
      } else {
    res.status(401).send({"status": 401,"success":false, "message": "All fields are required" })
      }
    }
  }
  //login............................................................
  module.exports.userLogin = async (req, res) => {
    try {
      const { email, password } = req.body
      if (password && email ) {
        const user = await UserModel.findOne({email: email})
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password)
          if ((user.email === email) && isMatch) {
            // Generate JWT Token
            const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
            res.send({ "status": 201,"success":true, "message": "Login Success", "token": token })
          } else {
            res.status(401).send({"status": 401,"success":false, "message":  "Email or Password is not Valid" })
          }
        } else {
          res.status(401).send({"status": 401,"success":false, "message":  "You are not a Registered User"  })
        }
      } else {
     res.status(401).send({"status": 401,"success":false, "message":  "All Fields are Required" })
        
      }
    } catch (error) {
      console.log(error)
     res.status(401).send({"status": "401","success":false, "message": "Unable to Login" })
    }
  }
  //forgotPassword.......................................................
module.exports.sendOtpEmail = async (req, res) => {
  const { email } = req.body
var otp = Math.floor(1000 + Math.random() * 9000);
console.log(otp);
  if (email) {
    const user = await UserModel.findOne({ email: email })
    if (user) {
   const data = await UserModel.findOneAndUpdate({email},{ otp:otp})
      const transporter = nodemailer.createTransport(smtpTransport({
        host: "smtp-mail.outlook.com", 
        secureConnection: false, 
        port: 587,
        auth: {
            user: "aryasaini2025@outlook.com",
            pass: "saini@2525"
        }
    }));
    var mailOptions = {
      from:  "aryasaini2025@outlook.com",
      to: email, 
      subject: 'Sending Otp Your Mail',
      text: ""+otp, 
       };
  
  // // send mail with defined transport object
   transporter.sendMail(mailOptions, function(error, info){
      if(error){
      console.log(error);
      }else{
        console.log(info);
        res.send({ "status": "201","success":true, "message": "Otp Send Your mail Successfully" })
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
  //verifyOtp
  module.exports.verifyOtp = async (req, res) => {
    const {otp,email } = req.body
    try{
    const user = await UserModel.findOne({$and: [{email: email},{otp: otp}]})
    if(user){
      const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
      res.send({ "status": "201","success":true, "message": "Otp Verify Successfully",token })
    }else{
      res.status(401).send({"status": "401","success":false, "message":  " Your Otp  Is Invalid"  })
    }
  }catch(error){
     res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong"  })
  }
  }
  //setPassword

  module.exports.userPasswordReset = async (req, res) => {
    const { password, password_confirmation } = req.body
    try {
      if (password && password_confirmation) {
        if (password !== password_confirmation) {
          res.status(401).send({"status": "401","success":false, "message":  "New Password and Confirm New Password doesn't match"   })
        } else {
          const salt = await bcrypt.genSalt(10)
          const newHashPassword = await bcrypt.hash(password, salt)
          await UserModel.findByIdAndUpdate(req.users._id, { $set: { password: newHashPassword } })
          res.send({ "status": "201","success":true, "message": "Password Reset Successfully" })
        }
      } else {
        res.status(401).send({"status": "401","success":false, "message":  "All Fields are Required"})
      }
    }catch (error){
     console.log("err...........=>",error)
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" ,error })
    }
  }
//changePassword..................................
module.exports.changeUserPassword = async (req, res) => {
  const { password, password_confirmation } = req.body
  if (password && password_confirmation) {
    if (password !== password_confirmation) {
      res.status(401).send({"status": "401","success":false, "message":  "New Password and Confirm New Password doesn't match" })
    } else {
      const salt = await bcrypt.genSalt(10)
      const newHashPassword = await bcrypt.hash(password, salt)
      await UserModel.findByIdAndUpdate(req.users._id, { $set: { password: newHashPassword } })
      res.send({ "status": "201","success":true, "message": "Password changed succesfully" })
    }
  } else {
    res.status(401).send({"status": "401","success":false, "message":  "All Fields are Required" })
  }
}
   //userSell..........................................................
   module.exports.userSell = async (req, res) => {
    const {userId } = req.query;
    console.log(userId);
    try{
      const data = await UserSell.find({userId:userId})
    if(data){
    res.send({ "status": "201","success":true, "message": "Get Sell Car Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
  //sellDelete.......................................................
  module.exports.userSellDelete = async (req, res) => {
    const {_id } = req.body;
    console.log(_id);
    try{
      const data = await UserSell.findOneAndDelete({_id:_id})
    if(data){
    res.send({ "status": "201","success":true, "message": "Delete Sell Car Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
  //userlist...................................................................
  module.exports.userlist = async (req, res) => {
  try{
       const {userId } = req.query;
      const data = await UserModel.findOne({_id:userId})
    if(data){
    res.send({ "status": "201","success":true, "message": "Get User Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
  //buyerList......................................................
  module.exports.userbuyer = async (req, res) => {
    const {userId } = req.query;
    console.log(_id);
    try{
      const data = await Userbuyer.find({userId:userId})
    if(data){
    res.send({ "status": "201","success":true, "message": "Get Buyer Car Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }