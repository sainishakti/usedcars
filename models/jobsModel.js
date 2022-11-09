const mongoose = require("mongoose");

// Defining Schema
const jobsSchema = new mongoose.Schema({
  title: { type: String},
  description: { type: String},
  jobType: { type: String},
  jobLocation: { type: String},
  experience: { type: String},
  skill: { type: String},
  

  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("job", jobsSchema)




