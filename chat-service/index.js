const express = require('express')
const keys = require('./config/keys')
const authorization = require('authorization')

const app = express()
app.use(express.json())

const verifyToken = authorization.verifyToken(keys.JWT_SECRET)

app.get('/', verifyToken, (req, res) => {
  res.status(200).send("Success")
})

console.log("Chat-Service: Running Express Server on Port: " + keys.PORT)
app.listen(keys.PORT)