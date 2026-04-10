const pool = require('./pool.js')

async function getAllAuthor(){
    const {rows} = await pool.query('SELECT * FROM author')
    
    return rows;
}




module.exports = {
    getAllAuthor
}