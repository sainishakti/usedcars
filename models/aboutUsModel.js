const mongoose = require("mongoose");

// Defining Schema
const aboutSchema = new mongoose.Schema({
  subHeading: { type: String},
  mainHeading: { type: String},
  name: { type: String},
  skill: { type: String},
  image: { type: String},
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("aboutUs", aboutSchema)




