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

async function createNewBook(name,description,author_first, author_last,genre){

     await pool.query
    (
        `
        WITH book_ids AS (
        INSERT INTO book (book_name,book_description)
        VALUES ('${name}', '${description}') RETURNING id AS id_book
        ),
        author_insert AS (
        INSERT INTO author (first_name, last_name,book_id)
        VALUES ('${author_first}', '${author_last}', (SELECT id_book FROM book_ids))
        ),
        genre_ids AS (
        INSERT INTO genre (genre_name)
        VALUES ('${genre}') RETURNING id AS id_genre
        )
        
        INSERT INTO genre_book (book_id, genre_id)
        VALUES ((SELECT id_book FROM book_ids),(SELECT id_genre FROM genre_ids));
        
        `
    )
   
    
}



module.exports = {
    getAllBooks,
    getOneBook,
    createNewBook
}

// const sql = `
//   SELECT book_name,book_description, book_id,author.first_name, 
//   FROM book
//   INNER JOIN author
//   ON book.id = author.book_id
//   WHERE book_id = 2;
// `



// INSERT INTO book
//         (book_name,book_description)
//         VALUES
//         ('${name}', '${description}')
//         RETURNING id into id_book;




        // INSERT INTO genre
        // (genre_name)
        // VALUES
        // ('${genre}')
        // RETURNING id into id_genre;



        //   WITH id_book AS (
        // INSERT INTO book
        // (book_name,book_description)
        // VALUES
        // ('${name}', '${description}')
        // RETURNING id
        // )

        // INSERT INTO author
        // (first_name, last_name,book_id)
        // VALUES
        // ('${author_first}', '${author_last}', (
        // SELECT id FROM id_book));

        // WITH id_genre AS (
        // INSERT INTO genre
        // (genre_name)
        // VALUES
        // ('${genre}')
        // RETURNING id
        // )

        // INSERT INTO genre_book
        // (book_id,genre_id)
        // VALUES
        // ((SELECT id FROM id_book),(SELECT id FROM id_genre));



        // WITH id_book AS (
        // INSERT INTO book
        // (book_name,book_description)
        // VALUES
        // ('harry', 'scary')
        // RETURNING id
        // )
        // INSERT INTO author
        // (first_name, last_name,book_id)
        // VALUES
        // ('james', 'jam', (
        // SELECT id FROM id_book)
        // ),
        // INSERT INTO genre
        // (genre_name)
        // VALUES
        // ('thriller')
        // RETURNING id
        // )
        // INSERT INTO genre_book
        // (book_id,genre_id)
        // VALUES
        // ((SELECT id FROM id_book),SELECT id);