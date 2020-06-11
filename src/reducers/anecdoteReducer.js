/*
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
// hienosti kopioi oikeaan muotoon. Ei kuitenkaan käytetä tätä
const initialState = anecdotesAtStart.map(asObject)

*/

import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  const compareVotes = (a, b) => {
    return b.votes - a.votes
  }
  
  switch (action.type) {      
      case 'CREATE':
        return state.concat(action.data)
      case 'INIT_ANECDOTES':
        return action.data.sort(compareVotes)
      case 'VOTE':
        const id = action.data.id
        const anecToChange = state.find(n => n.id === id)
        const changedAnec = { 
          ...anecToChange, 
          votes: action.data.votes
        }
        return state.map(anec =>
          anec.id !== id ? anec : changedAnec 
        ).sort(compareVotes)
    default: return state
  }

} 
  /* vanha tapa
  // alustusta varten
  export const initializeAnecdotes = (anecdotes) => {
    return {
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    }
  }
  */

  // uusi tapa, kaikki hoituu täällä
  export const initializeAnecdotes = () => {
    return async dispatch => {
      const anecdotes = await anecdoteService.getAll()
      dispatch({
        type: 'INIT_ANECDOTES',
        data: anecdotes,
      })
    }
  }
  
  /* vanha tapa
  // vote nappia painamala tehdää tämä
  export const createAnec = (content) => {
    const newAnec = {
      type: 'CREATE',
      data: content
    }
    return newAnec 
    
  }
  */

  // uusi tapa, kaikki hoituu täällä
  export const createAnec = (content) => {
    return async dispatch => {
      const newAnec = await anecdoteService.createNew(content)
      dispatch({
        type: 'CREATE',
        data: newAnec
      })
    }
  }

  // vote napin action creator
  // uusi tapa, kaikki hoituu täällä
  export const createVote = (anecdote) => {
    const voted = {...anecdote, votes: anecdote.votes +1} 
    return async dispatch => {
      const updated = await anecdoteService.update(voted.id, voted)
      dispatch({
        type: 'VOTE',
        data: updated,
      })
    }
  }

export default reducer