import React from 'react'
import '../styles/chat.css'

class Message extends React.Component {
  render() {
    console.log(this.props.message)
    return (
      <div className={this.props.userType}>
        {this.props.message.data}
      </div>
    )
  }
}

export default Message