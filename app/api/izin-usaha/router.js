const express = require('express');
const router = express.Router();
const { getIzinUsaha, actionCreate, actionDelete, getAllIzinUsaha } = require('./controller');

router.get('/', getAllIzinUsaha);
router.get('/:userId', getIzinUsaha);
router.post('/', actionCreate);
router.delete('/:id', actionDelete);

module.exports = router;
