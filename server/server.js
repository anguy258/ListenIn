require('./database/database').connect()
const express = require('express')
const app = express()
app.use(express.json())
const http = require('http')
const server = http.createServer(app)

const port = process.env.PORT || 300

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})