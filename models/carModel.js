const mongoose = require("mongoose");

// Defining Schema
const carSchema = new mongoose.Schema({
  brand: { type: String},
  AddPrice: { type: String},
  rtoLocation: { type: String},
  year: { type: String},
  model: { type: String},
  varient: { type: String},
  AddvehicleImages: { type: String},
  Owner: { type: String},
  kmDriven: { type: String},
  fuelType: { type: String},
  
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("sellCar", carSchema)




