import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  {createVote} from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

// FORM JA LIST NIMET MENNYT RISTIIN
const AnecdoteForm = () => {
  // haetaan vain anecdootit storesta
  const anecdotes = useSelector(state => state.anecdotes)
  const filter =  useSelector(state => state.filter)  
  const filteredAnec = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
  
  const dispatch = useDispatch()

  const vote = (anecdote) => {        
    dispatch(createVote(anecdote))
    dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
  }
    
  return (
    <div>
    <h2>Anecdotes</h2>
    {filteredAnec.map(anecdote =>  
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote)}>vote</button>
        </div>
      </div>
    )}
    </div>
  )
  // käytetään ei-kontrolloitua lomaketta eli ei ole stateja inputtille ja changille kuten ennen tehty
  
}

export default AnecdoteForm