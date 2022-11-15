const mongoose = require("mongoose");

// Defining Schema
const termSchema = new mongoose.Schema({
  termConditions:{ type: String},
  adminId: { type: String},
  },
{
  timestamps:true
},
)
// Model
module.exports=jobModel = mongoose.model("condition", termSchema)




