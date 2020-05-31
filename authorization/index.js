const jwt = require('jsonwebtoken')

function verifyToken(secret){
  return (socket, next) => {
    if (socket.handshake.query && socket.handshake.query.token) {
      jwt.verify(socket.handshake.query.token, secret, (err, decoded) => {
        if(err) next(new Error(403))
        socket.decoded = decoded
        next()
      });
    } else {
      next(new Error(401))
    }
  }
}

module.exports.verifyToken = verifyToken