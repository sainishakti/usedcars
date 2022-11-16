const mongoose = require("mongoose");

// Defining Schema
const videoSchema = new mongoose.Schema({
  video:{ type: String},
 

  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("video", videoSchema)




