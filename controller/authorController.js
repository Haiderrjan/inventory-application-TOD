const db = require('../db/authorQuery.js')


module.exports.index = async (req, res) => {
    const  authors = await db.getAllAuthor();
    console.log('author:', authors);
    res.render('author', {authors});
    
}