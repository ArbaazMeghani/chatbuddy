import React from "react";
import Chat from "./chat/chat";
import Authentication from "./authentication/authentication"
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Chat} />
        <Route path="/auth" component={Authentication} />
      </Router>
    )
  }
}

export default App;