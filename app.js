const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 2896 || process.env.PORT

const SLASH_PARAM = "/?"
const PAGE_PARAM = "page="

app.use(cors())

app.get("/characters/:page", (req, res) => {
    const BASE_URL = process.env.BASE_URL_RICK_AND_MORTY
    const CHARACTER_URI = proces.env.CHARACTER_URI
    const page = req.params.page || 1

    fetch(BASE_URL + CHARACTER_URI + SLASH_PARAM + PAGE_PARAM + page)
        .then(response => response.json())
        .then(data => {
            res.send(data)
        })
})

app.get("/character/:id", (req, res) => {

})

app.listen(PORT, (error) => {
    if(error){
        console.log("Error occurred while starting server: " + error)
    } else {
        console.log("Server running on port: " + PORT)
    }
})