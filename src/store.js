// Saamme muodostettua varsinaisen reducerin yhdistämällä kaksi olemassaolevaa reduceria funktion combineReducers avulla
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // applymiddleware ja thunkin avulla saadaan abstrahoitua tietokantakutsut ja tallennus storeen redurecereihin. Liittyy jotenkin asyncronisiin kutsuihin, että näitä piti käyttää
//  Redux DevTools, jonka avulla Redux-storen tilaa ja sitä muuttavia actioneja on mahdollisuus seurata selaimen konsolista.
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
})

// tehdään store, joka käyttää reduceriä  './reducers/anecdoteReducer'
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store