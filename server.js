const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const port = process.env.PORT
//const port =3000;
// CORS Policy
app.use(cors())

// Database Connection
require("./config/config.js")

// JSON
app.use('upload',express.static('/upload'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Load Routes
require("./router/authRouter.js")(app)
require("./router/jobsRouter.js")(app)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})