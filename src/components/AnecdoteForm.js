import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  {createVote} from '../reducers/anecdoteReducer'

// FORM JA LIST MENNYT RISTIIN
const AnecdoteForm = () => {
  // haetaan vain anecdootit storesta
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (anecdote) => {    
    dispatch(createVote(anecdote))
    console.log('vote', anecdote.id)
  }

  return (
    <div>
    <h2>Anecdotes</h2>
    {anecdotes.map(anecdote =>  
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