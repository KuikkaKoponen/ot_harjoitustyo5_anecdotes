
// stateen voi siis tallentaa missä muodossa haluaa. 
// Kutsuss/Actionissa pitää olla kutitenkin type = 'JOTAIN'. Sen jölkeen sisältö voi olla vaikka content tms.
const filterReducer = (state = '', action) => {
  
  switch (action.type) {
    case 'FILTER':
      return action.content   
    default:
      return state
  }
}

export default filterReducer