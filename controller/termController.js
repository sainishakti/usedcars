const termModel =require("../models/termConditionModel.js")
//Create Jobs
module.exports.addtermConditions = async (req, res) => {
    const { termConditions } = req.body
    const user = await termModel.findOne({adminId:"63614549151501e7eb202820"})
console.log("user",user);
    if (!user ){
   try {
    const data = new termModel({
        termConditions: termConditions,
        adminId:"63614549151501e7eb202820"
            })
            await data.save()
            res.status(201).send({ "status":"200", "success":true, "message": "Add  TermConditions  Successfully",data})
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "401","success":false, "message": "Unable to Add privacyPolicy" })
          }
        }else {
            const data = await termModel.findOneAndUpdate({adminId:"63614549151501e7eb202820"},
                {
                policy: policy,
                })
              if(data){
              res.send({ "status": "201","success":true, "message": "Replace TermConditions Successfully",data })
              }}
    }
    //updatePrivacy...........................
    module.exports.updateConditions = async (req, res) => {
        const { termConditions,_id} = req.body
        try{
        const data = await termModel.findByIdAndUpdate({ _id: _id },
          {
            termConditions: termConditions,
            
          })
        if(data){
        res.send({ "status": "201","success":true, "message": "update termConditions Successfully",data })
        }else{
          res.status(401).send({"status": "401","success":false, "message": "Unable To update" })
        }
        }catch(error){
          res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
          console.log("error",error);
    }
      }
    //   //delete..................
       module.exports.deleteConditions = async (req, res) => {
        const {_id} = req.body;
        console.log("_id...............=>",_id);
        try{
        const data = await termModel.findByIdAndDelete({_id:_id})
        if(data){
        res.send({ "status": "201","success":true, "message": "Delete termConditions Successfully",data })
        }else{
          res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
        }
        }catch(error){
          res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
          console.log("error",error);
    }
      }
    //   //listPrivacy................
      module.exports.GetConditions = async (req, res) => {
        try{
        const data = await termModel.find()
        if(data){
        res.send({ "status": "201","success":true, "message": "List Get termConditions Successfully",data })
        }else{
          res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
        }
        }catch(error){
          res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
          console.log("error",error);
    }
      }