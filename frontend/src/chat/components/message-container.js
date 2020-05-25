import React from 'react'
import '../styles/chat.css'

class MessageContainer extends React.Component {
  render() {
    return (
      <div className="message-container">
          {this.props.messages}
      </div>
    )
  }
}

export default MessageContainer