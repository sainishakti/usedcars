const mongoose = require("mongoose");

// Defining Schema
const blogSchema = new mongoose.Schema({
  heading: { type: String},
  content: { type: String},
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("blog", blogSchema)




