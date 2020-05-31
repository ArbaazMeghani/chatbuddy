import React from 'react'
import '../styles/chat.css'

class Message extends React.Component {
  render() {
    return (
      <div className={this.props.userType}>
        <h6>{this.props.message.user}</h6>
        {this.props.message.data}
      </div>
    )
  }
}

export default Message