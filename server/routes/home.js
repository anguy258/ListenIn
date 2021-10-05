const express = require('express')
const {home} = require('../controllers/home')
const {auth} = require('../middleware/auth')
const router = express.Router()

router.get('/home', auth, home)

module.exports = router