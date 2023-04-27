require("dotenv").config()
const express = require("express")
const cors = require("cors")
const serverless = require("serverless-http")
const characterRouter = require("./controllers/characters")

const router = express.Router()

const app = express()

app.use(cors())

router.use("/character", characterRouter)

app.use("/.netlify/functions/api", router)

module.exports = app
module.exports.handler = serverless(app)