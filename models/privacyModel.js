const mongoose = require("mongoose");

// Defining Schema
const privacySchema = new mongoose.Schema({
  policy: { type: String},
  adminId: { type: String},
  },
{
  timestamps:true
},
)
// Model
module.exports=jobModel = mongoose.model("privacy", privacySchema)




