const testModel =require('../models/testimonial.js')
module.exports.addtestimoinal = async (req, res) => {
    const {reviewerProfile,reviewerName,review} = req.body
    if ( reviewerProfile && reviewerName && review) {
   try {
    const data = new testModel({
        reviewerProfile: reviewerProfile,
        reviewerName:reviewerName,
        review:review,
        image:"https://adminportals.herokuapp.com/uploads/"+req?.file?.filename
            })
            await data.save()
            res.status(201).send({ "status":"200", "success":true, "message": "Add  testimonial  Successfully",data})
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "401","success":false, "message": "Unable to Add testimonial" })
          }
        } else {
    res.status(401).send({"status": "401","success":false, "message": "All fields are required" })
      }
    }
//list...................................................
    module.exports.listtest = async(req, res) => {
  
        try{
        const data = await testModel.find()
        if(data){
        res.send({ "status": "201","success":true, "message": "Get List  testimoinal  Successfully",data })
        }else{
          res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
        }
        }catch(error){
          res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
          console.log("errorr",error);
      }
      }
      //details.............................................//
      module.exports.detailstest = async(req, res) => {
        const{_id} = req.query;
        console.log(_id);
        try{
        const data = await testModel.findOne({_id:_id});
        if(data){
        res.send({ "status": "201","success":true, "message": "Get Details testimoinal Successfully",data })
        }else{
          res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
        }
        }catch(error){
          res.status(401).send({"status": "401","success":false, "message":  "Something Went Wrong" })
          console.log("errorr",error);
      }
      }
      //deleteAboutUs................................................
      module.exports.deletetest = async(req, res) => {
        const _id = req.body._id;
        console.log(_id);
        try{
        const data = await testModel.findByIdAndDelete({_id:_id})
        if(data){
        res.send({ "status": "201","success":true, "message": "delete testimoinal Successfully",data })
        }else{
          res.status(401).send({"status": "401","success":false, "message": "Unable To Deletet" })
        }
        }catch(error){
          res.status(401).send({"status": "401","success":false, "message":  "Something Went Wrong" })
          console.log("errorr",error);
      }
      }
      //edit..................................................
      module.exports.updateTest = async (req, res) => {
        const{reviewerProfile,reviewerName,review,_id} = req.body;
        console.log("_id",_id,req.body);
        console.log("req",req.file.filename);
        try{
        const data = await testModel.findOneAndUpdate({ _id:_id },
          {
        reviewerProfile: reviewerProfile,
        reviewerName:reviewerName,
        review:review,
        image:"https://adminportals.herokuapp.com/uploads/"+req?.file?.filename
          })
        if(data){
        res.send({ "status": "201","success":true, "message": "update  testimoinal  Successfully",data })
        }else{
          res.status(401).send({"status": "401","success":false, "message": "Unable To update" })
        }
        }catch(error){
          res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
          console.log("error",error);
      }
      }