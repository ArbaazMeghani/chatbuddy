const keys = require('./config/keys')
const express = require('express')
const routes = require('./web/routes')

const app = express()

app.use(express.json())
app.use('/', routes)

console.log("Running Express Server on Port: " + keys.PORT);
app.listen(keys.PORT)