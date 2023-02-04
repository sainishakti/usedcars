const mongoose = require("mongoose");

// Defining Schema
const bookCarSchema = new mongoose.Schema({
  name: { type: String},
  phoneNumber: { type: String},
  address: { type: String},
  pinCode: { type: String}, 
  city: { type: String},
  userId: { type: String},
 
 
  
  },
{
  timestamps:true
},
)
// Model
module.exports=jobModel = mongoose.model("Bookcar", bookCarSchema)




