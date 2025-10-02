const express = require('express');
const router = express.Router();
const { index, viewUser } = require('./controller');

const { isLoginAdmin } = require('../../middleware/auth');

router.use(isLoginAdmin);
router.get('/', index);
router.get('/view-user/:userId', viewUser);

module.exports = router;
