const db = require('../db/bookQuery.js')


module.exports.index = async (req, res) => {
    const books = await db.getAllBooks();
  
    res.render('book/index', {books});
    
}

module.exports.show = async (req,res) => {
    const {id} = req.params;
    const book = await db.getOneBook(id);
    console.log(book);
    res.render(`book/show`, {book})
}