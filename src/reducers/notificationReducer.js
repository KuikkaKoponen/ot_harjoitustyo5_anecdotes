
const notificationReducer = (state = '', action) => {

  switch (action.type) {
    case 'FLAG':
      return action.content  
    case 'SETNULL':
      return state = ''   
    default:
      return state
  }
}

export default notificationReducer