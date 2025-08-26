const express = require('express');
const router = express.Router();
const { actionCreate, actionDelete, getAllPengurus, getPengurus } = require('./controller');

router.get('/', getAllPengurus);
router.get('/:userId', getPengurus);
router.post('/', actionCreate);
router.delete('/:id', actionDelete);

module.exports = router;
