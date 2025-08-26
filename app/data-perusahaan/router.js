const express = require('express');
const router = express.Router();
const { actionCreate, actionDelete, getDataPerusahaan, } = require('./controller');

/* GET home page. */
router.get('/', getDataPerusahaan);
router.post('/', actionCreate);
router.delete('/:id', actionDelete);

module.exports = router;
