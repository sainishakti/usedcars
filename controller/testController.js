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