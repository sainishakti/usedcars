const  cityModel =require("../models/cityModel.js")


//AddBlog..........................................................................
module.exports.cityAdd = async (req, res) => {
    const {city} = req.body
          try {
            const data = new cityModel({
                city:city,
           })
       await data.save()
            res.status(201).send({ "status":200, "success":true, "message": "Add City Successfully",data })
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": 401,"success":false, "message": "Unable to Add" })
          }
        } 
//cityList........................................................................
module.exports.cityList = async (req, res) => {
    try{
      const data = await cityModel.find()
    if(data){
    res.send({ "status": "201","success":true, "message": "get CityList  Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }