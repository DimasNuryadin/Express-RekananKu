const express = require('express');
const router = express.Router();
const { index, viewUser, actionAccept, actionReject } = require('./controller');

const { isLoginAdmin } = require('../../middleware/auth');

router.use(isLoginAdmin);
router.get('/', index);
router.get('/view-user/:user_id', viewUser);
router.put('/accept/:id', actionAccept);
router.put('/reject/:id', actionReject);

module.exports = router;
