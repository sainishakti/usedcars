const mongoose = require("mongoose");

// Defining Schema
const adminSchema = new mongoose.Schema({
  name: { type: String},
  email: { type: String},
  mobile: { type: String},
  password: { type: String},
  
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("admin", adminSchema)




