const aboutModel =require('../models/aboutUsModel.js')


module.exports.addaboutUs = async (req, res) => {
    const { subHeading ,mainHeading,name,skill} = req.body
    if ( name && subHeading,mainHeading,skill) {
   try {
    const data = new aboutModel({
      name: name,
      subHeading: subHeading,
      mainHeading:mainHeading,
      skill:skill,
      image:"https://adminportals.herokuapp.com/upload/"+req?.file?.filename
            })
            await data.save()
            res.status(201).send({ "status":"200", "success":true, "message": "Add  Comment  Successfully",data})
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "401","success":false, "message": "Unable to Add Comment" })
          }
        } else {
    res.status(401).send({"status": "401","success":false, "message": "All fields are required" })
      }
    }