const mongoose = require("mongoose");

// Defining Schema
const serviceSchema = new mongoose.Schema({
  addMainText: { type: String},
  addSubHeading: { type: String},
  addMainHeading: { type: String},
  addInnerBoxText: { type: String},
  addInnerBoxContent: { type: String},
  image: { type: String},
  

  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("service", serviceSchema)




