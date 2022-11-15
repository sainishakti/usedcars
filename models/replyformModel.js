const mongoose = require("mongoose");

// Defining Schema
const replySchema = new mongoose.Schema({
  userId: { type: String},
  replyMessage: { type: String},
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("reply", replySchema)




