const  adminModel =require("../models/adminModel.js")
const  jwt =require("jsonwebtoken")
const  bcrypt =require("bcrypt")
const  sellModel =require("../models/carModel.js")
const  userModel =require("../models/userModel.js")
const  BlogModel =require("../models/BlogModel.js")
const  BuyModel =require("../models/buyModel.js")
const buyModel = require("../models/buyModel.js")
const  carBookModel =require("../models/bookCarModel")
const bookCarModel = require("../models/bookCarModel")



  //login............................................................
  module.exports.adminLogin = async (req, res) => {
    try {
      const { email, password } = req.body
      if (password && email ) {
        const user = await adminModel.findOne({email: email})
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password)
          if ((user.email === email) && isMatch) {
            
            // Generate JWT Token
            const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
            res.send({ "status": 201,"success":true, "message": "Login Success", "token": token ,user })
          } else {
            res.status(401).send({"status": 401,"success":false, "message":  "Email or Password is not Valid" })
          }
        } else {
          res.status(401).send({"status": 401,"success":false, "message":  "You are not a Admin"  })
        }
      } else {
     res.status(401).send({"status": 401,"success":false, "message":  "All Fields are Required" })
        
      }
    } catch (error) {
      console.log(error)
     res.status(401).send({"status": "401","success":false, "message": "Unable to Login" })
    }
  }
  //listSell.........................................................................
  module.exports.getSellList = async (req, res) => {
    try{
      const data = await sellModel.find()
    if(data){
    res.send({ "status": "201","success":true, "message": "get Sell List  Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
  //deleteSell....................................................................................
  module.exports.deleteSell = async (req, res) => {
    const _id  = req.body._id
    try{
      const data = await sellModel.findOneAndDelete({_id:_id})
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
//userList.........................................
  module.exports.getUserList = async (req, res) => {
    try{
      const data = await userModel.find()
    if(data){
    res.send({ "status": "201","success":true, "message": "get User List  Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
  //deleteSell....................................................................................
  module.exports.deleteUser = async (req, res) => {
    const _id  = req.body._id
    try{
      const data = await userModel.findOneAndDelete({_id:_id})
    if(data){
    res.send({ "status": "201","success":true, "message": "Delete User Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
  //BlogList......................................................................................
  module.exports.getBlogList = async (req, res) => {
    try{
      const data = await BlogModel.find()
    if(data){
    res.send({ "status": "201","success":true, "message": "get Blog List  Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
  //changePaaswords...............................................................
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
  //BuyRequestList..................................................................
  module.exports.getBuyList = async (req, res) => {
    try{
      const data = await bookCarModel.find()
    if(data){
    res.send({ "status": "201","success":true, "message": "get BuyRequest List  Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
  //deleteBuyRequest.......................................................................
  module.exports.deleteBuy = async (req, res) => {
    const _id  = req.body._id
    try{
      const data = await bookCarModel.findOneAndDelete({_id:_id})
    if(data){
    res.send({ "status": "201","success":true, "message": "Delete BuyRequest Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
      