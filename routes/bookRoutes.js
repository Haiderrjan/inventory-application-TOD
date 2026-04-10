const express = require('express')
const router = express.Router();
const book = require('../controller/bookController.js')



router.get('/', book.index);

router.get('/:id',book.show )

module.exports = router;