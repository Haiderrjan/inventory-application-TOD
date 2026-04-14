const express = require('express')
const router = express.Router();
const book = require('../controller/bookController.js')



router.get('/', book.index);
router.get('/new', book.RenderNewBook);

router.get('/:id',book.show);
router.post('/', book.addBook);



module.exports = router;