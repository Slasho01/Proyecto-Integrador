const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        const {id, name, status, species, gender, origin, image} = req.body
        if(!id || !name || !status || !species || !gender || !origin || !image) return res.status(401).json({error: 'Faltan Datos'})
        await Favorite.findOrCreate({where: {id}, defaults:{name, status, species, gender, origin: name, image},})
        const allFavorites = await Favorite.findAll();
        return res.status(201).json(allFavorites);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}
module.exports = postFav;