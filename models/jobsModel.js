const mongoose = require("mongoose");

// Defining Schema
const jobsSchema = new mongoose.Schema({
  ProfileName: { type: String},
  RequiredSkillsAndCertificateDetails:{ type: String},
  JD: { type: String},
  jobLocation: { type: String},
  MinSalary: { type: String},
  MaxSalary: { type: String},
  description: { type: String},
  
  

  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("job", jobsSchema)




