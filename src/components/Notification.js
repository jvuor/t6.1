import React from 'react'
import { connect } from 'react-redux'

class Notification extends React.Component {
  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }

    const notification = this.props.notification.notification

    if(notification) {
      return (
        <div style={style}>
          {notification}
        </div>
      )
    } else {
      return (null)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps, null)(Notification)

export default ConnectedNotification
