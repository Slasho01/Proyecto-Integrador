const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
function getCharById (req, res) {
  // Realiza la solicitud a la API de Rick & Morty
  //const { id } = req.params
  const id = parseInt(req.params.id)
  axios(`${URL}${id}`)
  .then(({ data }) => {
    const { name, status, species, gender, origin, image } = data
    const character = { id, name, status, species, gender, origin, image }
    return character.name ? res.status(200).json(character) : res.status(404).send("Not found.")
  }).catch((error) => {
    res.status(500).json({error: error.message})
  })
};

module.exports = getCharById;