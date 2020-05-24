const jwt = require('jsonwebtoken')

function verifyToken(jwtSecret) {
  return function (req, res, next) {
    token = req.headers['authorization']

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

module.exports.verifyToken = verifyToken