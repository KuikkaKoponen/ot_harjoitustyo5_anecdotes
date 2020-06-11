import React from 'react'
//import { useSelector, useDispatch } from 'react-redux'
import { createVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {
  
  //const dispatch = useDispatch()
  // haetaan vain anecdootit storesta
  //const anecdotes = useSelector(state => state.anecdotes)
  //const filter =  useSelector(state => state.filter)  
  //const filteredAnec = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
  
  // tässä käytetään nyt connectia, joka on vanhempi tapa kuin useDispatc ja useSelector
  const filteredAnec = () => {
    const filter =  props.filter
    const anecdotes = props.anecdotes
    const filteredAnec = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    return filteredAnec.sort(compareVotes)
  }

  const compareVotes = (a, b) => {
    return b.votes - a.votes
  }
 
  return (
    <div>
    <h2>Anecdotes</h2>
    {filteredAnec().map(anecdote =>  
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => props.createVote(anecdote) & props.setNotification(`you voted '${anecdote.content}'`, 5)}>vote</button>
        </div>
      </div>
    )}
    </div>
  )
  // käytetään ei-kontrolloitua lomaketta eli ei ole stateja inputtille ja changille kuten ennen tehty
  
}

// tämä hakee storesta tilat
const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  }
}

// tämä dispachaa oliot
const mapDispatchToProps = {
  createVote, setNotification
}

const ConnectedNotes = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedNotes

// export default AnecdoteList