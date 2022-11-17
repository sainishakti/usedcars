const mongoose = require("mongoose");

// Defining Schema
const testimonialsSchema = new mongoose.Schema({
  reviewerProfile: { type: String},
  reviewerName: { type: String},
  image: { type: String},
  review: { type: String},
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("testimonial", testimonialsSchema)




