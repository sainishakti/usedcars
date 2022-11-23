const mongoose = require("mongoose");

// Defining Schema
const jobsSchema = new mongoose.Schema({
  jobsId:{ type: mongoose.Schema.Types.ObjectId, ref: 'job' },
  name: { type: String},
  email: { type: String},
  levelOfeducation: { type: String},
  experience: { type: String},
  skill: { type: String},
  exceptedsalary: { type: String},
  information: { type: String},
},
{
  timestamps:true
},
)
// Model
module.exports=jobModel = mongoose.model("jobsApply", jobsSchema)




