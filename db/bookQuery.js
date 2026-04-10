const pool = require('./pool.js')

async function getAllBooks(){
    const {rows} = await pool.query('SELECT * FROM book')
    
    return rows;
}


async function getOneBook(id) {
    const {rows} = await pool.query
    (
        `
    SELECT 
    book_id, book_name,author.first_name, author.last_name, book_description
    FROM book
    INNER JOIN author
    ON book.id = author.book_id
    WHERE book_id = ${id};
        `,
        
      
    )

        return rows;


}



module.exports = {
    getAllBooks,
    getOneBook
}

const sql = `
  SELECT book_name,book_description, book_id,author.first_name, 
  FROM book
  INNER JOIN author
  ON book.id = author.book_id
  WHERE book_id = 2;
`