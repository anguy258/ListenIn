const express = require('express')
const app = express()
const sessions = require('express-session')
const dotenv = require('dotenv').config()
app.use(express.json())
app.use(sessions({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true.valueOf,
    cookie: {maxAge: 21600000},
    resave: false,
}))
const http = require('http')
const server = http.createServer(app)
const loginRoutes = require('./routes/login')

const port = process.env.PORT || 3001

app.use(loginRoutes)

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})