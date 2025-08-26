const express = require('express');
const router = express.Router();
const { actionCreate, actionDelete, getAllPengurus, getPengurus } = require('./controller');

/* GET home page. */
router.get('/', getAllPengurus);
router.get('/:id', getPengurus);
router.post('/', actionCreate);
router.delete('/:id', actionDelete);

module.exports = router;
