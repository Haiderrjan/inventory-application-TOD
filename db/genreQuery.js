const pool = require('./pool.js')

async function getAllGenre() {

    const {rows} = await pool.query(`SELECT * FROM genre`)
        
    return rows;
}


module.exports = {
    getAllGenre
}

