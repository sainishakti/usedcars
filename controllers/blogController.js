const  BlogModel =require("../models/BlogModel.js")


//AddBlog..........................................................................
module.exports.blogAdd = async (req, res) => {
    const {blogTitle,blogContent,blogCategory,metaTitle, metaDescription,metaKeyword,canonicalUrl,permaLink} = req.body
          try {
            const data = new BlogModel({
                blogTitle:blogTitle,
                blogImage:"https://usedcars.onrender.com/uploads/"+req.file.filename,
                blogContent:blogContent,
                blogCategory:blogCategory,
                metaTitle:metaTitle,
                metaDescription:metaDescription,
                metaKeyword:metaKeyword,
                canonicalUrl:canonicalUrl,
                permaLink:permaLink
})
            await data.save()
            res.status(201).send({ "status":200, "success":true, "message": "Add Blog Successfully",data })
          } catch (error) {
            console.log(error)
            res.status(401).send({ "status": 401,"success":false, "message": "Unable to Add" })
          }
        } 
//GETBlog.....................................................................................
module.exports.getBlogDetails = async (req, res) => {
    const _id = req.query;
    try{
      const data = await BlogModel.findOne({_id})
    if(data){
    res.send({ "status": "201","success":true, "message": "get BlogDetails  Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Get" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);
}
  }
  //DeleteBlog.....................................................................................
module.exports.blogDelete = async (req, res) => {
    const {_id} = req.body;
    try{
      const data = await BlogModel.findOneAndDelete({_id:_id})
    if(data){
    res.send({ "status": "201","success":true, "message": "Blog Deleted  Successfully",data })
    }else{
      res.status(401).send({"status": "401","success":false, "message": "Unable To Delete" })
    }
    }catch(error){
      res.status(401).send({"status": "401","success":false, "message":  "Something went Wrong" })
      console.log("error",error);//AddBlog..........................................................................
      module.exports.blogAdd = async (req, res) => {
          const {blogTitle,blogContent,blogCategory,metaTitle, metaDescription,metaKeyword,canonicalUrl,permaLink} = req.body
                try {
                  const data = new BlogModel({
                      blogTitle:blogTitle,
                      blogImage:"https://usedcars.onrender.com/uploads/"+req.file.filename,
                      blogContent:blogContent,
                      blogCategory:blogCategory,
                      metaTitle:metaTitle,
                      metaDescription:metaDescription,
                      metaKeyword:metaKeyword,
                      canonicalUrl:canonicalUrl,
                      permaLink:permaLink
      })
                  await data.save()
                  res.status(201).send({ "status":200, "success":true, "message": "Add Blog Successfully",data })
                } catch (error) {
                  console.log(error)
                  res.status(401).send({ "status": 401,"success":false, "message": "Unable to Add" })
                }
              } 
}
  }
  //updateBlog..........................................................................
module.exports.blogUpdate = async (req, res) => {
    const {blogTitle,blogContent,blogCategory,metaTitle, metaDescription,metaKeyword,canonicalUrl,permaLink,_id} = req.body
          try {
            if(req.file == undefined){
            var data = await BlogModel.findOneAndUpdate({_id:_id},{
                blogTitle:blogTitle,
                blogContent:blogContent,
                blogCategory:blogCategory,
                metaTitle:metaTitle,
                metaDescription:metaDescription,
                metaKeyword:metaKeyword,
                canonicalUrl:canonicalUrl,
                permaLink:permaLink
             })
            await data.save()
            res.status(201).send({ "status":200, "success":true, "message": "Update Blog Successfully",data })
          }else{
            var data = await BlogModel.findOneAndUpdate({_id:_id},{
                blogTitle:blogTitle,
                blogImage:"https://usedcars.onrender.com/uploads/"+req.file.filename,
                blogContent:blogContent,
                blogCategory:blogCategory,
                metaTitle:metaTitle,
                metaDescription:metaDescription,
                metaKeyword:metaKeyword,
                canonicalUrl:canonicalUrl,
                permaLink:permaLink
})
res.status(201).send({ "status":200, "success":true, "message": "Update Blog Successfully",data })

         } 
        }catch (error) {
            console.log(error)
            res.status(401).send({ "status": 401,"success":false, "message": "Unable to update" })
          }
        } 
    