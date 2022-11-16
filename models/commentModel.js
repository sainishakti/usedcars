const mongoose = require("mongoose");
// Defining Schema
const commentSchema = new mongoose.Schema({
  name: { type: String},
  email: { type: String},
  website: { type: String},
  comment: { type: String},
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("blogComment", commentSchema)




