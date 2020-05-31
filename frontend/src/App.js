import React from "react";
import Chat from "./chat/chat";
import Authentication from "./authentication/authentication"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

class App extends React.Component {

  render() {
    console.log("RENDERED")
    return (
      <Router>
        <this.protectedChat authToken={Cookies.get("authToken")}/>
        <this.authentication authToken={Cookies.get("authToken")}/>
      </Router>
    )
  }

  protectedChat = ({authToken}) => {
    if(!authToken) {
      console.log("redirect to auth")
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
      console.log("redirect to app")
      return <Redirect to="/" />
    }

    return <Route path="/auth" component={Authentication} />
  }
}

export default App;