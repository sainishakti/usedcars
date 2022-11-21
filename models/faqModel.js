const mongoose = require("mongoose");

// Defining Schema
const faqSchema = new mongoose.Schema({
  question: { type: String},
  answer: { type: String}
  },
{
  timestamps:true
},
)
// Model
module.exports=jobModel = mongoose.model("faq", faqSchema)




