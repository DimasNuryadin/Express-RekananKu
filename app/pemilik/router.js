const express = require('express');
const router = express.Router();
const { getPemilik, actionCreate, actionDelete } = require('./controller');

/* GET home page. */
router.get('/', getPemilik);
router.post('/', actionCreate);
router.delete('/:id', actionDelete);

module.exports = router;
