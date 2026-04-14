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


module.exports.RenderNewBook = async (req,res) => {
    res.render('book/new')
}


module.exports.addBook = async (req,res) => {
    console.log(req.body);
    
    const {bookName, firstName,LastName, description, genre} = req.body;
   
    
    const addBook = await db.createNewBook(bookName, firstName,LastName, description, genre);
    console.log(addBook);
    
    res.redirect('/book')
}



