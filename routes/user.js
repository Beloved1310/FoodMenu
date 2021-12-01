const express = require('express')
const asyncMiddleware = require('../middleware/async')

const router = express.Router()

const signUp = require('../controller/user/signUp')
const login = require('../controller/user/login')

router.post('/signup', asyncMiddleware(signUp))

router.post('/login', asyncMiddleware(login))

module.exports = router;

