import React from "react";
import socketIOClient from "socket.io-client";
import keys from "./config/keys"
import { Button, TextField } from "@material-ui/core";

class App extends React.Component {

  componentDidMount() {
    const socket = socketIOClient(keys.CHAT_SERVICE_URL);
    socket.on("chat-message", data => {
      console.log(data)
      this.setState({message: data})
    });
  }

  handleChange = (event) => {
    this.setState({message: event.target.value})
  }

  handleSend = (event) => {
    event.preventDefault()
    console.log("send button clicked with message: " + this.state.message)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSend}>
          <TextField id="outlined-basic" label="message" variant="outlined" onChange={this.handleChange}/>
          <Button type="submit">Send</Button>
        </form>
      </div>
    );
  }
}

export default App;