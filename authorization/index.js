const jwt = require('jsonwebtoken')

function verifyToken(jwtSecret) {
  return function (req, res, next) {
    authHeader = req.headers['authorization']
    token = authHeader && authHeader.split(' ')[1]

    if(token == null) {
      return res.status(401).send()
    }

    jwt.verify(token, jwtSecret, (err, user) => {
      if(err) {
        return res.status(403).send()
      }
    })

    next()
  }
}

module.exports = verifyToken