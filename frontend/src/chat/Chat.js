import React from "react"
import socketIOClient from "socket.io-client"
import keys from "../config/keys"
import Message from './components/message'
import MessageContainer from './components/message-container'
import MessageComposer from './components/message-composer'
import './styles/chat.css'
import Cookie from 'js-cookie'

class Chat extends React.Component {
  
  constructor() {
    super()
    
    this.state = {
      socket: socketIOClient(keys.CHAT_SERVICE_URL, {
        query: {token: Cookie.get("authToken")}
      }),
      messages: [],
      id: 0
    }
  }
  
  render() {
    return (
      <div className="root">
        <MessageContainer messages={this.state.messages} />
        <MessageComposer handleSend={this.handleSend} />
      </div>
    );
  }
  
  componentDidMount() {
    this.state.socket
    .on('error', (err) => {
      this.handleConnectionError(err)
    })
    .on("chat-message", receivedMessage => {
      console.log(receivedMessage)
      this.publishMessage(receivedMessage, "receiver")
    });
  }

  publishMessage = (message, userType) => {
    const messageComponent = <Message key={this.state.id} userType={userType} message={message}/>
    this.setState({
      messages: [messageComponent, ...this.state.messages],
      id: this.state.id + 1,
    })
  }

  broadcastMessage = (message) => {
    this.state.socket.emit("chat-message", message)
  }

  handleSend = (message) => {
    this.publishMessage(message, "sender")
    this.broadcastMessage(message.data)
  }

  handleConnectionError = (error) => {
    console.log(error)
    Cookie.remove("authToken")
    this.props.update()
  }
}

export default Chat;