const aboutModel =require('../models/aboutUsModel.js')


module.exports.addaboutUs = async (req, res) => {
    const {name,skill} = req.body
    if ( name && skill) {
   try {
    const data = new aboutModel({
      name: name,
      skill:skill,
      image:"https://adminportals.herokuapp.com/upload/"+req?.file?.filename
            })
            await data.save()
            res.status(201).send({ "status":"200", "success":true, "message": "Add  AboutUs  Successfully",data})
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "401","success":false, "message": "Unable to Add Comment" })
          }
        } else {
    res.status(401).send({"status": "401","success":false, "message": "All fields are required" })
      }
    }

//UpdateAboutus
module.exports.updateAboutus = async (req, res) => {
  const {name,skill,_id} = req.body
  try{
  const data = await aboutModel.findByIdAndUpdate({ _id: _id },
    {
      name: name,
      skill: skill,
      image:"https://adminportals.herokuapp.com/upload/"+req?.file?.filename
    })
  if(data){
  res.send({ "status": "201","success":true, "message": "update  aboutUs Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To update" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("error",error);
}
}
//listUpdateus............
module.exports.listaboutUs = async(req, res) => {
  
  try{
  const data = await aboutModel.find()
  if(data){
  res.send({ "status": "201","success":true, "message": "Get List  AboutUs Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
    console.log("errorr",error);
}
}
//details.............................................//
module.exports.detailsAboutUs = async(req, res) => {
  const{_id} = req.query;
  console.log(_id);
  try{
  const data = await aboutModel.findOne({_id:_id});
  if(data){
  res.send({ "status": "201","success":true, "message": "Get Details AboutUs Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something Went Wrong" })
    console.log("errorr",error);
}
}
//deleteAboutUs................................................
module.exports.deleteAboutUs = async(req, res) => {
  const _id = req.body._id;
  console.log(_id);
  try{
  const data = await aboutModel.findByIdAndDelete({_id:_id})
  if(data){
  res.send({ "status": "201","success":true, "message": "Get Details AboutUs Successfully",data })
  }else{
    res.status(401).send({"status": "401","success":false, "message": "Unable To Deletet" })
  }
  }catch(error){
    res.status(401).send({"status": "401","success":false, "message":  "Something Went Wrong" })
    console.log("errorr",error);
}
}
