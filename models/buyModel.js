const mongoose = require("mongoose");

// Defining Schema
const buySchema = new mongoose.Schema({
  userId: { type: String},
  minPrice: { type: String},
  maxPrice: { type: String},
  selectCity: { type: String},
  chooseFeatures: { type: String},
  model: { type: String},
  kmDriven: { type: String},
  Owner: { type: String},
  fuelType: { type: String},
  
  },
{
  timestamps:true
},
)

// Model
module.exports=jobModel = mongoose.model("buyCar", buySchema)




