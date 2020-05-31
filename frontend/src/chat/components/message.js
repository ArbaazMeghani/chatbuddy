import React from 'react'
import '../styles/chat.css'

class Message extends React.Component {
  render() {
    return (
      <>
        <div className={this.props.userType}>
          {this.props.message.data}
        </div>
        <h6 className={this.props.userType}>
          {this.props.message.user}
        </h6>
      </>
    )
  }
}

export default Message