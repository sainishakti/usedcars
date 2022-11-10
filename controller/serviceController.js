const servicesModel =require("../models/serviceModel.js")
//Create Jobs
module.exports.addServices = async (req, res) => {
    const { addMainText ,addSubHeading ,addMainHeading , addInnerBoxText , addInnerBoxContent } = req.body

if ( addMainText && addSubHeading  && addMainHeading && addInnerBoxText &&addInnerBoxContent) {
          try {
    const doc = new servicesModel({
        addMainText: addMainText,
        addSubHeading: addSubHeading,
        addMainHeading:addMainHeading,
        addInnerBoxText:addInnerBoxText,
        addInnerBoxContent:addInnerBoxContent,
        image:req?.file?.filename
            })
            await doc.save()
            res.status(201).send({ "status":"200", "success":true, "message": "Add Services  Successfully" })
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "401","success":false, "message": "Unable to Services Add" })
          }
        } else {
    res.status(401).send({"status": "401","success":false, "message": "All fields are required" })
      }
    }