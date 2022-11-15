const mongoose = require("mongoose");

// Defining Schema
const contactUsSchema = new mongoose.Schema({
  TopSliderText: { type: String},
  OurContactDetailHere: { type: String},
  OurEmailDetailHere: { type: String},
  OurLocation: { type: String},
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("contactUs", contactUsSchema)




