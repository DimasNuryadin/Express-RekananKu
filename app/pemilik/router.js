const express = require('express');
const router = express.Router();
const { actionCreate } = require('./controller');

/* GET home page. */
router.post('/', actionCreate);

module.exports = router;
