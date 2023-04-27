const express = require("express")
const router = express.Router()
const {getCharactersByPage, getCharacterById, getCharacterByName} = require("../services/characters")

router.get("/byPage/:page", (req, res) => {
    const page = req.params.page || 1

    getCharactersByPage(page)
        .then(response => response.json())
        .then(data => res.send(data))
})

router.get("/:id", (req, res) => {
    const characterId = req.params.id || 1
    
    getCharacterById(characterId)
        .then(response => response.json())
        .then(data => res.send(data))
})

router.get("/byName/:name", (req, res) => {
    const characterName = req.params.name || ""

    getCharacterByName(characterName)
        .then(response => response.json())
        .then(data => res.send(data))
})

module.exports = router;