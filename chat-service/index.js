const keys = require('./config/keys')
const io = require('socket.io')(keys.PORT)

io.on("connection", socket => {
  console.log("user connected")
  socket.emit("chat-message", "hello world")
})

console.log("Chat-Service: Running Server on Port: " + keys.PORT)