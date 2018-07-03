import React from 'react'

class Notification extends React.Component {
  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }

    const notification = this.props.store.getState().notification.notification

    if(notification) {
      return (
        <div style={style}>
          {this.props.store.getState().notification.notification}
        </div>
      )
    } else {
      return (null)
    }
  }
}

export default Notification
