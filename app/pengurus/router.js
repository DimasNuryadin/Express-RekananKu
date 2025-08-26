const express = require('express');
const router = express.Router();
const { actionCreate, actionDelete, getAllPengurus } = require('./controller');

/* GET home page. */
router.get('/', getAllPengurus);
router.post('/', actionCreate);
router.delete('/:id', actionDelete);

module.exports = router;
