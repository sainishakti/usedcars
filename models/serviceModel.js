const mongoose = require("mongoose");

// Defining Schema
const serviceSchema = new mongoose.Schema({

  addInnerBoxContent: { type: String},
  
  

  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("service", serviceSchema)




