const express = require("express")
const router = express.Router()
const {getCharactersByPage, getCharacterById, getCharacterByName} = require("../services/characters")

router.get("/byPage/:page", (req, res) => {
    const page = req.params.page || 1

    getCharactersByPage(page)
        .then(response => res.json(response.data))
})

router.get("/:id", (req, res) => {
    const characterId = req.params.id || 1

    getCharacterById(characterId)
        .then(response => res.json(response.data))
})

router.get("/byName/:name", (req, res) => {
    const characterName = req.params.name || ""

    getCharacterByName(characterName)
        .then(response => res.json(respons.datae))
})

module.exports = router;