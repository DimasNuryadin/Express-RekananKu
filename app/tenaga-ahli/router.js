const express = require('express');
const router = express.Router();
const { getTenagaAhli, actionCreate, actionDelete } = require('./controller');

/* GET home page. */
router.get('/', getTenagaAhli);
router.post('/', actionCreate);
router.delete('/:id', actionDelete);

module.exports = router;
