const express = require("express")
const router = express.Router()
const {getCharactersByPage, getCharactersById} = require("../services/characters")

router.get("/:page", (req, res) => {
    const page = req.params.page || 1

    getCharactersByPage(page)
        .then(response => response.json())
        .then(data => res.send(data))
})

router.get("/:id", (req, res) => {
    const characterId = req.params.id || 1
    
    getCharactersById(characterId)
    .then(response => response.json())
    .then(data => res.send(data))
})

module.exports = router;