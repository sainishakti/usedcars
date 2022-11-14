const contactModel =require("../models/conactModel.js")
//Create Jobs
module.exports.addblog = async (req, res) => {
    const { heading ,content} = req.body
    if ( heading && content) {
   try {
    const data = new contactModel({
        heading: heading,
        content: content,
            })
            await data.save()
            res.status(201).send({ "status":"200", "success":true, "message": "Add  Blog  Successfully",data})
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "401","success":false, "message": "Unable to contact" })
          }
        } else {
    res.status(401).send({"status": "401","success":false, "message": "All fields are required" })
      }
    }