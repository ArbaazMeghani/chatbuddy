import React from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import Axios from 'axios'
import keys from '../config/keys'
import Cookie from 'js-cookie'

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

  handleSignUp = async () => {
    this.authenticate("/signup")
  }

  
  handleLogin = async () => {
    this.authenticate("/login")
  }

  authenticate = async (endpoint) => {
    if(this.state.username === "" || this.state.password === "") {
      return
    }

    const response = await Axios.post(keys.AUTH_SERVICE_URL + "/signup", {
      username: this.state.username,
      password: this.state.password
    })

    console.log(response.data.token)
    Cookie.set("authToken", response.data.token)
    this.props.history.push('/')
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