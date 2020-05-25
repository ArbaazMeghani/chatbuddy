import React from 'react'
import '../styles/chat.css'

class Message extends React.Component {
  render() {
    return (
      <div className={this.props.userType}>
        {this.props.message}
      </div>
    )
  }
}

export default Message