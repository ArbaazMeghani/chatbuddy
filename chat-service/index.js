const express = require('express')
const keys = require('./config/keys')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send("Success")
})

console.log("Running Express Server on Port: " + keys.PORT)
app.listen(keys.PORT)