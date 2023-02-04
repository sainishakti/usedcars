const mongoose = require("mongoose");

// Defining Schema
const aboutSchema = new mongoose.Schema({
  name: { type: String},
  email: { type: String},
  mobile: { type: String},
  password: { type: String},
  otp: { type: String},
  //  jobsId:{ type: mongoose.Schema.Types.ObjectId, ref: 'job' },
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("aboutUs", aboutSchema)




