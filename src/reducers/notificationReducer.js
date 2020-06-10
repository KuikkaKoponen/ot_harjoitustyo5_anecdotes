
const notificationReducer = (state = '', action) => {
  // KORJAA
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