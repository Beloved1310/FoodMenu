const express = require('express');
const asyncMiddleware = require('../middleware/async');

const router = express.Router();
const auth = require('../middleware/auth');

const order = require('../controller/order/order');

router.post('/menus', auth, asyncMiddleware(order));

module.exports = router;
