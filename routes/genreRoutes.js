const express = require('express')
const router = express.Router();
const genre = require('../controller/genreController.js')





router.get('/', genre.index);

module.exports = router;