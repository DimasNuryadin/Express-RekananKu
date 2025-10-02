const express = require('express');
const router = express.Router();
const { getPemilik, actionCreate, actionDelete, getAllPemilik } = require('./controller');

router.get('/', getAllPemilik);
router.get('/:userId', getPemilik);
router.post('/', actionCreate);
router.delete('/:id', actionDelete);

module.exports = router;
