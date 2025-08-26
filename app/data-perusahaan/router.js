const express = require('express');
const router = express.Router();
const { actionCreate, actionDelete, getPengurus } = require('./controller');

/* GET home page. */
router.get('/', getPengurus);
router.post('/', actionCreate);
router.delete('/:id', actionDelete);

module.exports = router;
