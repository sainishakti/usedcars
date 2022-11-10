const mongoose = require("mongoose");

// Defining Schema
const contactSchema = new mongoose.Schema({
  name: { type: String},
  email: { type: String},
  phoneNumber: { type: String},
  message: { type: String},
  subject: { type: String},
  image: { type: String},
  

  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("contact", contactSchema)




