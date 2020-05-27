import React from 'react'
import { TextField, Button, Grid } from '@material-ui/core'

class Authentication extends React.Component {

  constructor() {
    super()

    this.state = {
      username: "",
      password: ""
    }
  }

  handleUsernameChange = (event) => {
    console.log(event.target.value)
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    console.log(event.target.value)
    this.setState({
      password: event.target.value
    })
  }

  handleSignUp = () => {
    if(this.state.username === "" || this.state.password === "") {
      return
    }
    console.log(this.state.username)
    console.log(this.state.password)
  }

  handleLogin = () => {
    if(this.state.username === "" || this.state.password === "") {
      return
    }
    console.log(this.state.username)
    console.log(this.state.password)
  }

  render() {
    return (
      <Grid container spacing={0} justify="center" alignItems="center" direction="column" style={{minHeight: "100vh"}}>
        <Grid item>
          <TextField value={this.state.username} onChange={this.handleUsernameChange} label="username" type="text"/>
        </Grid>
        <Grid item>
          <TextField value={this.state.password} onChange={this.handlePasswordChange} label="password" type="password"/>
        </Grid>
        <Grid item>
          <Button onClick={this.handleLogin} variant="contained" color="primary">Login</Button>
        </Grid>
        <Grid item>
          <Button onClick={this.handleSignUp} variant="contained" color="default">Sign Up</Button>
        </Grid>
      </Grid>
    )
  }
}

export default Authentication