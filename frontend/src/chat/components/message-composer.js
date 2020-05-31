import React from 'react'
import { Button, TextField, Grid } from "@material-ui/core"
import SendIcon from '@material-ui/icons/Send'
import '../styles/chat.css'

class MessageComposer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: ""
    }
  }

  render() {
    return (
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
    )
  }

  handleChange = (event) => {
    this.setState({message: event.target.value})
  }

  handleSend = (event) => {
    event.preventDefault()

    if(this.state.message === "") {
      return
    }

    console.log("send button clicked with message: " + this.state.message)

    this.props.handleSend({
      data: this.state.message,
      username: "You"
    })
    this.setState({
      message: ""
    })
  }
}

export default MessageComposer