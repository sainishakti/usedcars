const mongoose = require("mongoose");

// Defining Schema
const citySchema = new mongoose.Schema({
city: { type: Array},
  
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("city", citySchema)




