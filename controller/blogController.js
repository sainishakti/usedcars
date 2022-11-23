const blogModel =require("../models/blogmodel.js")
const blogComment =require("../models/commentModel.js")
//Create Jobs
module.exports.addblog = async (req, res) => {
    const { heading ,content} = req.body
    if ( heading && content) {
   try {
    const data = new blogModel({
        heading: heading,
        content: content,
        image:"https://adminportals.herokuapp.com/uploads/"+req?.file?.filename
            })
            await data.save()
            res.status(201).send({ "status":"200", "success":true, "message": "Add  Blog  Successfully",data})
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": "401","success":false, "message": "Unable to Add Blog" })
          }
        } else {
    res.status(401).send({"status": "401","success":false, "message": "All fields are required" })
      }
    }
//updateblog............................................................/
module.exports.updateBlog = async (req, res) => {
    const { heading ,content,_id} = req.body
    try{
    const data = await blogModel.findByIdAndUpdate({ _id: _id },
      {
        heading: heading,
        content: content,
        image:"https://adminportals.herokuapp.com/uploads/"+req?.file?.filename
      })
    if(data){
    res.send({ "status": "201","success":true, "message": "update Blog Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To update" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
  }
  }
  //ListBlog.............................................................//
  module.exports.listBlog = async (req, res) => {
    try{
    const data = await blogModel.find()
    if(data){
    res.send({ "status": "201","success":true, "message": "Get List  Blog Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
  }
  }
  //detailsBlog..............................................................................//
  module.exports.detailsBlog = async (req, res) => {
    const { _id }  = req.query;
    console.log("id",_id);
    try{
    const data = await blogModel.findById({_id:_id})
    if(data){
    res.send({ "status": "201","success":true, "message": "Get  blog  Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
  }
  }
  //deleteBlog.....................................................................
  module.exports.deleteBlog = async (req, res) => {
    const  _id  = req.body._id
    console.log("id",_id);
    try{
    const data = await blogModel.findByIdAndDelete({_id:_id})
    if(data){
    res.send({ "status": "201","success":true, "message": "Delete Blog Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
  }
  }
  //comment.................................

  module.exports.addblogComment = async (req, res) => {
    const { name ,email,website,comment} = req.body
    if ( name && email,website,comment) {
   try {
    const data = new blogComment({
      name: name,
        email: email,
        website:website,
        comment:comment
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
    //list Comment.........................................//
    module.exports.listComment = async (req, res) => {
      try{
      const data = await blogComment.find()
      const totalComment = await blogComment.count()
      console.log("total",totalComment);
      if(data){
      res.send({ "status": "201","success":true, "message": "Get List  Comment Successfully",data,totalComment })
      }else{
        res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
      }
      }catch(error){
        res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
        console.log("error",error);
    }
    }
    //deleteComment..............................................................
    module.exports.deleteComment = async(req, res) => {
      const _id = req.body._id;
      console.log(_id);
      try{
      const data = await blogComment.findOneAndDelete({_id:_id})
      console.log("data",data);
      if(data){
      res.send({ "status": "201","success":true, "message": "delete comment Successfully",data })
      }else{
        res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
      }
      }catch(error){
        res.status(401).send({"status": "401","success":false, "message":  "Something Went Wrong" })
        console.log("errorr",error);
    }
    }