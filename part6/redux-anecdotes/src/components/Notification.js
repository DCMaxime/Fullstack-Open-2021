import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.notification
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if(notification !== null )
  return (
      <div style={style}>
        {notification}   </div>
  )
  else
    return <> </>
}

const stateToProps = (state) => {
  return {
    notification: state.notification,
  }
}

export default connect(stateToProps)(Notification)