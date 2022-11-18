const mongoose = require("mongoose");
// Defining Schema
const logoSchema = new mongoose.Schema({
  logo:{ type: String},
  images:{type:Array}
 },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("logo", logoSchema)




