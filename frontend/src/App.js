import React from "react";
import ProtectedChat from "./chat/chat";
import Authentication from "./authentication/authentication"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

class App extends React.Component {
  render() {
    return (
      <Router>
        <ProtectedChat update={this.handleUpdate} />
        <this.authentication authToken={Cookies.get("authToken")}/>
      </Router>
    )
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