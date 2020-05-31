const keys = require('./config/keys')
const io = require('socket.io')(keys.PORT)
const authorization = require('authorization').verifyToken(keys.JWT_SECRET)

io.use(authorization).on("connection", socket => {
  console.log("user connected")
  socket.on("chat-message", message => {
    socket.broadcast.emit("chat-message", message)
  })
})

console.log("Chat-Service: Running Server on Port: " + keys.PORT)