const privacyModel =require("../models//privacyModel.js")
//Create Jobs
module.exports.addpolicy = async (req, res) => {
    const { policy } = req.body
    const user = await privacyModel.findOne({adminId:"63614549151501e7eb202820"})
console.log("user",user);
    if (!user ){
   try {
    const data = new privacyModel({
        policy: policy,
        adminId:"63614549151501e7eb202820"
            })
            await data.save()
            res.status(201).send({ "status":"200", "success":true, "message": "Add  PrivacyPolicy  Successfully",data})
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "401","success":false, "message": "Unable to Add privacyPolicy" })
          }
        }else {
            const data = await privacyModel.findOneAndUpdate({adminId:"63614549151501e7eb202820"},
                {
                policy: policy,
                })
              if(data){
              res.send({ "status": "201","success":true, "message": "Replace privacy policy Successfully",data })
              }}
    }
    //updatePrivacy...........................
    module.exports.updateprivacy = async (req, res) => {
        const { policy ,_id} = req.body
        try{
        const data = await privacyModel.findByIdAndUpdate({ _id: _id },
          {
            policy: policy,
            
          })
        if(data){
        res.send({ "status": "201","success":true, "message": "update policy Successfully",data })
        }else{
          res.status(401).send({"status": "401","success":false, "message": "Unable To update" })
        }
        }catch(error){
          res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
          console.log("error",error);
    }
      }
      //delete..................
      module.exports.deletePrivacy = async (req, res) => {
        const {_id} = req.body;
        console.log("_id...............=>",_id);
        try{
        const data = await privacyModel.findByIdAndDelete({_id:_id})
        if(data){
        res.send({ "status": "201","success":true, "message": "Delete Privacy Successfully",data })
        }else{
          res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
        }
        }catch(error){
          res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
          console.log("error",error);
    }
      }
      //listPrivacy................
      module.exports.GetPrivacy = async (req, res) => {
        try{
        const data = await privacyModel.find()
        if(data){
        res.send({ "status": "201","success":true, "message": "List Get Privacy Successfully",data })
        }else{
          res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
        }
        }catch(error){
          res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
          console.log("error",error);
    }
      }