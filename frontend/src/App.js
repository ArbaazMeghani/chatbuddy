import React from "react";
import Chat from "./chat/chat";
import Authentication from "./authentication/authentication"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

class App extends React.Component {
  render() {
    return (
      <Router>
        <this.protectedChat authToken={Cookies.get("authToken")}/>
        <this.authentication authToken={Cookies.get("authToken")}/>
      </Router>
    )
  }

  protectedChat = ({authToken}) => {
    if(!authToken) {
      return <Redirect to="/auth" />
    }

    return <Route exact path="/">
      <Chat update={this.handleUpdate} />
    </Route>
  }

  authentication = ({authToken}) => {
    if(authToken) {
      return <Redirect to="/" />
    }

    return <Route path="/auth">
      <Authentication update={this.handleUpdate} />
    </Route>
  }

  handleUpdate = () => {
    this.forceUpdate()
  }
}

export default App;