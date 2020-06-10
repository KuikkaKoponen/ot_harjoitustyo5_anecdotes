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

    const notification = {
      type: 'FLAG',
      content: anecdote.content
    }
    dispatch(notification)
    
    const setnull = {
      type: 'SETNULL'
    }

    setTimeout(() => {
      dispatch(setnull)
    }, 3000)
  }

  const filter =  useSelector(state => state.filter) 
  const filteredAnec = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    
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