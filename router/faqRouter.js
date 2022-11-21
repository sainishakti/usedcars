module.exports =app=>{
    const router = require("express").Router()
    const faqUsController = require("../controller/faqController.js") 


    
    router.post("/addFaq",faqUsController.addFaq);
    router.post("/editFaq",faqUsController.updateFaq);
    router.get("/listFaq",faqUsController.listFaq);
    router.get("/detailsFaq",faqUsController.detailsFaq);
    router.post("/deleteFaq",faqUsController.deleteFaq);

 app.use('/',router)
}