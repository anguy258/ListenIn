const express = require('express')
const {register, login, logout} = require('../controllers/login')
const {auth, authHome} = require('../middleware/auth')
const router = express.Router()

router.post('/register', authHome, register)
router.post('/login', authHome, login)
router.post('/logout', auth, logout)

module.exports = router