const servicesModel =require("../models/serviceModel.js")
//Create services....................
module.exports.addServices = async (req, res) => {
    const { addMainText ,addSubHeading ,addMainHeading , addInnerBoxText , addInnerBoxContent } = req.body

if ( addMainText && addSubHeading  && addMainHeading && addInnerBoxText &&addInnerBoxContent) {
          try {
    const data = new servicesModel({
        addMainText: addMainText,
        addSubHeading: addSubHeading,
        addMainHeading:addMainHeading,
        addInnerBoxText:addInnerBoxText,
        addInnerBoxContent:addInnerBoxContent,
        image:"https://adminportals.herokuapp.com/upload/"+req?.file?.filename
            })
            await data.save()
            res.status(201).send({ "status":"200", "success":true, "message": "Add Services  Successfully",data})
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "401","success":false, "message": "Unable to Services Add" })
          }
        } else {
    res.status(401).send({"status": "401","success":false, "message": "All fields are required" })
      }
    }
//updateService............................................................/
module.exports.updateServices = async (req, res) => {
  const { addMainText ,addSubHeading ,addMainHeading , addInnerBoxText , addInnerBoxContent,_id} = req.body
  try{
  const data = await servicesModel.findByIdAndUpdate({ _id: _id },
    {
      addMainText: addMainText,
      addSubHeading: addSubHeading,
      addMainHeading:addMainHeading,
      addInnerBoxText:addInnerBoxText,
      addInnerBoxContent:addInnerBoxContent,
      image:"https://adminportals.herokuapp.com/upload/"+req?.file?.filename
    })
  if(data){
  res.send({ "status": "201","success":true, "message": "update services Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To update" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}
//serviceList.............................................................//
module.exports.listServices = async (req, res) => {
  
  try{
  const data = await servicesModel.find()
  if(data){
  res.send({ "status": "201","success":true, "message": "Get List  Sevices Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}
//detailsServices..............................................................................//
module.exports.detailsServices = async (req, res) => {
  const { _id }  = req.query;
  console.log("id",_id);
  try{
  const data = await servicesModel.findById({_id:_id})
  if(data){
  res.send({ "status": "201","success":true, "message": "Get  Sevices Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}
//deleteServices.....................................................................
module.exports.deleteServices = async (req, res) => {
  const  _id  = req.body._id
  console.log("id",_id);
  try{
  const data = await servicesModel.findByIdAndDelete({_id:_id})
  if(data){
  res.send({ "status": "201","success":true, "message": "Delete Sevices Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}