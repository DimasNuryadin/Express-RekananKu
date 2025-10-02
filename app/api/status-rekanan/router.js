const express = require('express');
const router = express.Router();
const { actionCreate, actionGet } = require('./controller');
const { isLoginPlayer } = require('../../middleware/auth');

router.get('/', isLoginPlayer, actionGet);
router.post('/', isLoginPlayer, actionCreate);

module.exports = router;
