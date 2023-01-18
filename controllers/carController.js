const  carModel =require("../models/carModel.js")
const  carBuyModel =require("../models/buyModel")
const  carBookModel =require("../models/bookCarModel")

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
            console.log("1");
            res.status(201).send({ "status":200, "success":true, "message": "Add Car Successfully",data })
          }else{
            console.log("2",req.files);
            const dataImage = req.files
            const image = dataImage.map((item)=>item.filename)
            var data = new carModel({
              brand: brand,
              AddPrice : AddPrice,
              city:city,
              year:year,
              model:model,
              varient:varient,
              AddvehicleImages:image,
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
//BookCar...........................................................................
module.exports.bookCar = async (req, res) => {
  const { name,phoneNumber,address,pinCode,city} = req.body
        try {
          const data = new carBookModel({
            name: name,
            phoneNumber : phoneNumber,
            address:address,
            pinCode:pinCode,
            city:city,
})
          await data.save()
          res.status(201).send({ "status":200, "success":true, "message": "Added Information Successfully",data })
        } catch (error) {
          console.log(error)
          res.status(401).send({ "status": 401,"success":false, "message": "Unable to Add" })
        }
      } 
      //SellCarList.............................................................
      module.exports.getSellList = async (req, res) => {
        try{
          const data = await carModel.find()
        if(data){
        res.send({ "status": "201","success":true, "message": "get Sell List  Successfully",data })
        }else{
          res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
        }
        }catch(error){
          res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
          console.log("error",error);
    }
      }
    //sellCarFilter................................................
//const data = await carBuyModel.find({$and:[{model:"model"},{Owner:"Owner"},{city:"city"},{price:"50"},{kmDriven:"50"}]})
    module.exports.getSellFilter = async (req, res) => {
      try{
         const{model,Owner,city,minPrice,maxPrice,kmDriven,fuelType} = req.body
       // if(minPrice != null && maxPrice != undefined && model != null && Owner != undefined && city != undefined && kmDriven != undefined && fuelType != undefined){
          var data = await carModel.find({$in:[{model:model},{Owner:Owner},{city:city},[ { $gt: [ "$AddPrice", minPrice ] }, { $lt: [ "$AddPrice", maxPrice ] } ] ,{kmDriven:kmDriven},{fuelType:fuelType}]})
         if(data){
          res.send({ "status": "201","success":true, "message": "get Sell Filter  Successfully",data })
         }    
      else{
        res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
      }
      }catch(error){
        res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
        console.log("error",error);
  }
    }
    //delete..........................................................
    module.exports.deleteSell = async (req, res) => {
      try{
        const data = await carModel.findOneAndDelete({_id:req.body_id})
      if(data){
      res.send({ "status": "201","success":true, "message": "Delete Sell Car Successfully",data })
      }else{
        res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
      }
      }catch(error){
        res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
        console.log("error",error);
  }
    }
        