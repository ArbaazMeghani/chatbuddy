import React from "react";
import Chat from "./chat/chat";
import Authentication from "./authentication/authentication"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      authToken: undefined
    }
  }

  componentDidMount() {
    this.setState({
      authToken: Cookies.get("authToken")
    })
  }

  render() {
    console.log("RENDERED")
    return (
      <Router>
        <this.protectedChat authToken={this.state.authToken}/>
        <this.authentication authToken={this.state.authToken}/>
      </Router>
    )
  }

  protectedChat = ({authToken}) => {
    if(!authToken) {
      return <Redirect to="/auth" />
    }

    try {
      return <Route exact path="/" component={Chat} />
    } catch(err) {
      Cookies.remove("authToken")
      return <Redirect to="/auth" />
    }
  }

  authentication = ({authToken}) => {
    if(authToken) {
      return <Redirect to="/" />
    }

    return <Route path="/auth" component={Authentication} />
  }
}

export default App;