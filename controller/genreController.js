const db = require('../db/genreQuery.js')


module.exports.index = async (req, res) => {
    const genre = await db.getAllGenre();
    console.log('genre:', genre);
    res.render('genre/index', {genre});
    
}