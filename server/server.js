require('dotenv').config()
const cors = require('cors')
const express = require('express')
const sessions = require('express-session')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
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