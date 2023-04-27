require("dotenv").config()
const express = require("express")
const cors = require("cors")
const characterRouter = require("./controllers/characters")

const app = express()
const PORT = 2896 || process.env.PORT

app.use(cors())

app.use("/character", characterRouter)

app.listen(PORT, (error) => {
    if(error){
        console.log("Error occurred while starting server: " + error)
    } else {
        console.log("Server running on port: " + PORT)
    }
})