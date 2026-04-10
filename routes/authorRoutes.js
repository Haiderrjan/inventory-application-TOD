const express = require('express')
const router = express.Router();
const author = require('../controller/authorController.js')



router.get('/', author.index);

module.exports = router;