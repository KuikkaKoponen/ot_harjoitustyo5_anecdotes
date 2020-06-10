//  Redux DevTools, jonka avulla Redux-storen tilaa ja sitä muuttavia actioneja on mahdollisuus seurata selaimen konsolista.
import { composeWithDevTools } from 'redux-devtools-extension'
// Saamme muodostettua varsinaisen reducerin yhdistämällä kaksi olemassaolevaa reduceria funktion combineReducers avulla
import { createStore, combineReducers } from 'redux'
import anecdoteReducer from '../reducers/anecdoteReducer'
import notificationReducer from '../reducers/notificationReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer
})

// tehdään store, joka käyttää reduceriä  './reducers/anecdoteReducer'
const store = createStore(reducer,
  composeWithDevTools()
)

export default store