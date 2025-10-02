const express = require('express');
const router = express.Router();
const { actionCreate, actionDelete, actionGet } = require('./controller');
const { isLoginPlayer } = require("../../middleware/auth");

router.get('/', isLoginPlayer, actionGet);
router.post('/', isLoginPlayer, actionCreate);
router.delete('/:id', isLoginPlayer, actionDelete);

module.exports = router;
