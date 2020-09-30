const keys = require('./config/keys')
const express = require('express')
const routes = require('./web/routes')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect(keys.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', routes)

console.log("Auth-Service: Running Express Server on Port: " + keys.PORT)
app.listen(keys.PORT)