const keys = require('./config/keys')
const express = require('express')
const routes = require('./web/routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', routes)

console.log("Auth-Service: Running Express Server on Port: " + keys.PORT)
app.listen(keys.PORT)