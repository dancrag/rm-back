const SLASH_PARAM = "/?"
const SLASH = "/"
const PAGE_PARAM = "page="
const BASE_URL = process.env.BASE_URL_RICK_AND_MORTY
const CHARACTER_URI = process.env.CHARACTER_URI

const getCharactersByPage = (page) => {
    return fetch(BASE_URL + CHARACTER_URI + SLASH_PARAM + PAGE_PARAM + page)
}

const getCharactersById = (id) => {
    return fetch(BASE_URL + CHARACTER_URI + SLASH + id)
}

module.exports = {getCharactersByPage, getCharactersById}