const mongoose = require("mongoose");

// Defining Schema
const serviceSchema = new mongoose.Schema({

  serviceName: { type: String},
  serviceContent: { type: String},
  image: { type: String},
  
  

  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("service", serviceSchema)




