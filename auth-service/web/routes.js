const express = require('express')
const authenticate = require('../service/authenticate')

router = express.Router();

router.get("/users", async (req, res) => {
  const users = await authenticate.retrieveUsers()
  res.json(users)
})

router.post("/login", async (req, res) => {
  token = await authenticate.login(req.body.username, req.body.password)

  if(token == null) {
    return res.status(403).send("Incorrest username or password")
  }

  return res.status(200).send(token)
})

router.post("/signup", async (req, res) => {
    token = await authenticate.signup(req.body.username, req.body.password)
    res.status(201).send(token)
})

module.exports = router;