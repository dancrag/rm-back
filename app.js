require("dotenv").config()
const express = require("express")
const cors = require("cors")
const serverless = require("serverless-http")
const characterRouter = require("./controllers/characters")

const app = express()
const PORT = 2896 || process.env.PORT

app.use(cors())

app.use("/character", characterRouter)

module.exports.handler = serverless(app)