const mongoose = require("mongoose");

// Defining Schema
const blogSchema = new mongoose.Schema({
  blogTitle: { type: String},
  blogImage: { type: String},
  blogContent: { type: String},
  blogCategory: { type: String},
  metaTitle: { type: String},
  metaDescription: { type: String},
  metaKeyword: { type: String},
  canonicalUrl: { type: String},
  permaLink : { type: String},
 
  
  },
{
  timestamps:true
},
)
// Model
module.exports=jobModel = mongoose.model("Blog", blogSchema)




