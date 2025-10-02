const express = require('express');
const router = express.Router();
const { getTenagaAhli, actionCreate, actionDelete, getAllTenagaAhli } = require('./controller');

router.get('/', getAllTenagaAhli);
router.get('/:userId', getTenagaAhli);
router.post('/', actionCreate);
router.delete('/:id', actionDelete);

module.exports = router;
