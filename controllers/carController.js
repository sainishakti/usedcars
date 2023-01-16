const  carModel =require("../models/carModel.js")
const  carBuyModel =require("../models/buyModel")


//sellcar..........................................................................
module.exports.sellCar = async (req, res) => {
    const { brand,AddPrice,city,year,model,varient,kmDriven,Owner,fuelType} = req.body
         try {
            if(req.files == undefined){
              var data = new carModel({
                brand: brand,
                AddPrice : AddPrice,
                city:city,
                year:year,
                model:model,
                varient:varient,
                Owner:Owner,
                kmDriven:kmDriven,
                fuelType:fuelType
                })
            await data.save()
            res.status(201).send({ "status":200, "success":true, "message": "Add Car Successfully",data })
          }else{
            var data = new carModel({
              brand: brand,
              AddPrice : AddPrice,
              city:city,
              year:year,
              model:model,
              varient:varient,
              AddvehicleImages:"https://usedcars.onrender.com/uploads/"+req.file.filename,
              Owner:Owner,
              kmDriven:kmDriven,
              fuelType:fuelType
})
          await data.save()
          res.status(201).send({ "status":200, "success":true, "message": "Add Car Successfully",data })
        } 
          } 
            
            catch (error) {
            console.log(error)
            res.status(401).send({ "status": 401,"success":false, "message": "Unable to Add" })
          }
        } 
  //detailsSell......................
  module.exports.getSellDetails = async (req, res) => {
    const _id = req.query;
    try{
      const data = await carModel.findOne({_id})
    if(data){
    res.send({ "status": "201","success":true, "message": "get SellDetails  Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
    
//buyCar.............................
module.exports.buyCar = async (req, res) => {
  const { minPrice,maxPrice, selectCity, chooseFeatures,model,kmDriven,Owner,fuelType} = req.body
        try {
          const data = new carBuyModel({
              minPrice: minPrice,
              maxPrice : maxPrice,
              selectCity:selectCity,
              chooseFeatures:chooseFeatures,
              model:model,
              Owner:Owner,
              kmDriven:kmDriven,
              fuelType:fuelType
})
          await data.save()
          res.status(201).send({ "status":200, "success":true, "message": "Buy Car Successfully",data })
        } catch (error) {
          console.log(error)
          res.status(401).send({ "status": 401,"success":false, "message": "Unable to Buy" })
        }
      } 
//searchcityAccordig.................................
module.exports.citySell = async (req, res) => {
  const city = req.body.city
  try{
    const data = await carModel.find({city:city})
  if(data){
  res.send({ "status": "201","success":true, "message": "get Sell Data  Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}