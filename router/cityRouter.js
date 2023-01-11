module.exports =app=>{
    const router = require("express").Router()
    const cityController = require("../controllers/cityController.js")

  

  router.post("/AddCity",cityController.cityAdd)
  router.post("/ListCity",cityController.cityList)


    app.use('/',router)
}