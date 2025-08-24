const express = require('express');
const router = express.Router();
const { index, viewUser } = require('./controller');

/* GET home page. */
router.get('/', index);
router.get('/view-user', viewUser);

module.exports = router;
