import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  // haetaan storesta notificationin sisältö
  const notification = useSelector(({notification}) => {
    if ( notification !== '' ) {
      return notification
    } else {
      return ''  
    }
  })

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (notification === '') {
    return null
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification