const express = require('express');
const router = express.Router();
const { getIzinUsaha, actionCreate, actionDelete } = require('./controller');

/* GET home page. */
router.get('/', getIzinUsaha);
router.post('/', actionCreate);
router.delete('/:id', actionDelete);

module.exports = router;
