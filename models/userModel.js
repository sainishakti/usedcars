const mongoose = require("mongoose");

// Defining Schema
const aboutSchema = new mongoose.Schema({
  name: { type: String},
  email: { type: String},
  mobile: { type: String},
  password: { type: String},
  otp: { type: String},
  
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("aboutUs", aboutSchema)




