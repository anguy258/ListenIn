const express = require('express')
const app = express()
app.use(express.json())
const http = require('http')
const server = http.createServer(app)
const loginRoutes = require('./routes/login')

const port = process.env.PORT || 3001

app.use(loginRoutes)

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})