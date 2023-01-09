const  carModel =require("../models/carModel.js")


//sellcar..........................................................................
module.exports.sellCar = async (req, res) => {
    const { brand,AddPrice, rtoLocation, year,model,varient,kmDriven,Owner,fuelType} = req.body
          try {
            const data = new carModel({
                brand: brand,
                AddPrice : AddPrice,
                rtoLocation:rtoLocation,
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
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": 401,"success":false, "message": "Unable to Add" })
          }
        } 
      
    
  