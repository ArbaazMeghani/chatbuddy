import React from "react";
import ProtectedChat from "./chat/chat";
import ProtectedAuthentication from "./authentication/authentication"
import { BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <ProtectedChat update={this.handleUpdate} />
        <ProtectedAuthentication update={this.handleUpdate} />
      </Router>
    )
  }

  handleUpdate = () => {
    this.forceUpdate()
  }
}

export default App;