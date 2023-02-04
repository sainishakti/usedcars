const mongoose = require("mongoose");

// Defining Schema
const bookCarSchema = new mongoose.Schema({
  name: { type: String},
  phoneNumber: { type: String},
  address: { type: String},
  pinCode: { type: String}, 
  city: { type: String},
  carId: { type: mongoose.Schema.Types.ObjectId, ref: 'sellcar' },
  request: { type: String,enum:['CANCEL',"APPROVE","PENDING"],default:"PENDING"},
 
 
 },
{
  timestamps:true
},
)
// Model
module.exports=jobModel = mongoose.model("Bookcar", bookCarSchema)




