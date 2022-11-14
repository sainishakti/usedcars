const  adminModel =require("../models/adminModel.js")
const  bcrypt =require("bcrypt")
const  jwt =require("jsonwebtoken")
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

module.exports.Admin = async (req, res) => {
    const { name,phone,email,address,password,_id } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
   try{
        const data = await adminModel.findByIdAndUpdate({ _id: _id },
          {
          name: name,
          email: email,
          address : address,
          password:hashPassword,
          phone:phone,
          adminProfile:req?.file?.filename
          })
          console.log("data",data);
        if(data){
        res.send({ "status": "201","success":true, "message": "update Admin Profile Successfully",data})
        }else{
          res.status(401).send({"status": "401","success":false, "message": "Unable To update" })
        }
        }catch(error){
          res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
          console.log("error",error);
    }
      }
      //AdminLogin .................................................................//   
module.exports.adminLogin = async (req, res) => {
    try {
      const { email, password } = req.body
      if (password && email) {
        const user = await adminModel.findOne({email: email})
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password)
          console.log(isMatch);
          if (user.email === email  && isMatch) {
            // Generate JWT Token
            const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
            res.send({ "status": "201","success":true, "message": "Login Success", "token": token })
          } else {
            res.status(401).send({"status": "401","success":false, "message":  "Email or Password is not Valid" })
          }
        } else {
          res.status(401).send({"status": "401","success":false, "message":  "You are not a Admin"  })
        }
      } else {
       res.status(401).send({"status": "401","success":false, "message":  "Email or Password Required" })
        
      }
    } catch (error) {
      console.log(error)
     res.status(401).send({"status": "401","success":false, "message": "Unable to Login" })
    }
  }
  //changePassword
  module.exports.changeAdminPassword = async (req, res) => {
    const { oldPassword,password, password_confirmation } = req.body
   
const user = await adminModel.findOne()
const isMatch = await bcrypt.compare(oldPassword, user.password)
if(isMatch){
    if (password && password_confirmation) {
      if (password !== password_confirmation) {
        res.status(401).send({"status": "401","success":false, "message":  "New Password and Confirm New Password doesn't match" })
      } else {
        const salt = await bcrypt.genSalt(10)
        const newHashPassword = await bcrypt.hash(password, salt)
        await adminModel.findByIdAndUpdate(req.users._id, { $set: { password: newHashPassword } })
        res.send({ "status": "201","success":true, "message": "Password changed succesfully" })
      }
    } else {
      res.status(401).send({"status": "401","success":false, "message":  "All Fields are Required" })
    }
  }else{
    res.status(401).send({"status": "401","success":false, "message":  "Old Password Is Wrong" })
  }
  }
  //forgetPassword
module.exports.sendOtpEmail = async (req, res) => {
  const { email } = req.body
var otp = Math.floor(1000 + Math.random() * 9000);
console.log(otp);
  if (email) {
    const user = await adminModel.findOne({ email: email })
    if (user) {
   const data = await adminModel.findOneAndUpdate({email},{ otp:otp})
      const transporter = nodemailer.createTransport(smtpTransport({
        host: "smtp-mail.outlook.com", 
        secureConnection: false, 
        port: 587,
        auth: {
            user: "sainishakti2525@outlook.com",
            pass: "saini@2525"
        }
    }));
    var mailOptions = {
      from:  "sainishakti2525@outlook.com", 
      to: email, 
      subject: 'Sending Otp Your Mail',
      text: ""+otp, 
       };
  
// send mail with defined transport object
   transporter.sendMail(mailOptions, function(error, info){
      if(error){
      console.log(error);
      }else{
        console.log(info);
        const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
        res.send({ "status": "201","success":true, "message": "Otp Send Your mail Successfully",otp,token })
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
  //setPassword.....................................................
  module.exports.setPassword = async (req, res) => {
    const {otp,email,password,password_confirmation} = req.body
  try{
    const user = await adminModel.findOne({$and: [{email: email},{otp: otp}]})
    console.log("data",user);
    if(user==null){
      res.status(401).send({"status": "401","success":false, "message":  " Your Condition Is Invalid"  })
    }
    else if(password !== password_confirmation) {
      res.status(401).send({"status": "401","success":false, "message":  "New Password and Confirm New Password doesn't match"   })
    }
    else{
          const _id = req.body._id
          const salt = await bcrypt.genSalt(10)
          const newHashPassword = await bcrypt.hash(password, salt)
          await adminModel.findByIdAndUpdate({_id:_id}, { $set: { password: newHashPassword } })
          res.send({ "status": "201","success":true, "message": "Password Reset Successfully" })
      }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message": "Something went Wrong" })
}
  }
  
  //setPassword

  //module.exports.userPasswordReset = async (req, res) => {
  //   const { password, password_confirmation } = req.body
  //   try {
  //     if (password && password_confirmation) {
  //       if (password !== password_confirmation) {
  //         res.status(401).send({"status": "401","success":false, "message":  "New Password and Confirm New Password doesn't match"   })
  //       } else {
  //         const salt = await bcrypt.genSalt(10)
  //         const newHashPassword = await bcrypt.hash(password, salt)
  //         await adminModel.findByIdAndUpdate(req.users._id, { $set: { password: newHashPassword } })
  //         res.send({ "status": "201","success":true, "message": "Password Reset Successfully" })
  //       }
  //     } else {
  //       res.status(401).send({"status": "401","success":false, "message":  "All Fields are Required"})
  //     }
  //   }catch (error){
  //    console.log("err...........=>",error)
  //     res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" ,error })
  //   }
  // }

