import React from "react";
import socketIOClient from "socket.io-client";
import keys from "./config/keys"
import { Button, TextField, Grid } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import './styles/App.css'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      socket: socketIOClient(keys.CHAT_SERVICE_URL),
      message: "",
      messages: [],
      id: 0
    }
  }

  componentDidMount() {
    this.state.socket.on("chat-message", receivedMessage => {
      console.log(receivedMessage)
      this.publishMessage(receivedMessage)
    });
  }

  publishMessage = (message) => {
    this.setState({
      messages: [...this.state.messages, <div key={this.state.id}>{message}</div>],
      id: this.state.id + 1,
      message: ""
    })
  }

  broadcastMessage = (message) => {
    this.state.socket.emit("chat-message", message)
  }

  handleChange = (event) => {
    this.setState({message: event.target.value})
  }

  handleSend = (event) => {
    event.preventDefault()
    const message = this.state.message

    if(message === "") {
      return
    }

    console.log("send button clicked with message: " + message)

    this.publishMessage(message)
    this.broadcastMessage(message)
  }

  render() {
    console.log(this.state.messages)
    return (
      <div className="root">
        <div className="message-container">
          {this.state.messages}
        </div>
        <div className="message-composer">
          <form onSubmit={this.handleSend}>
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={10}>
                <TextField className="message-text-box" id="outlined-basic" value={this.state.message} placeholder="message" variant="outlined" onChange={this.handleChange}/>
              </Grid>
              <Grid item xs={2}>
                <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon/>}>
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    );
  }
}

export default App;