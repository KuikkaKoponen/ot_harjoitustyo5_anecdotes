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

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  
  const compareVotes = (a, b) => {
    return b.votes - a.votes
  }
  
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecToChange = state.find(n => n.id === id)
      // luodaan sitten uusi olio, joka on muuten kopio muuttuvasta oliosta mutta kentän important arvo on muutettu päinvastaiseksi
      const changedAnec = { 
        ...anecToChange, 
        votes: action.data.votes +1
      }

      return state.map(anec =>
        anec.id !== id ? anec : changedAnec 
      ).sort(compareVotes)

      case 'CREATE':
        const newAnec = {...action.data, id: getId()}
        return state.concat(newAnec)
    default: return state
  }
}

  // vote nappia painamala tehdää tämä. TEE ACTION CREATOR
  export const createVote = (anecdote) => {
    const voted = {
      type: 'VOTE',
      data: anecdote
    }    
    console.log('vote', anecdote.id)
    return voted
  }

    // vote nappia painamala tehdää tämä
    export const createAnec = (content) => {
      const newAnec = {
        type: 'CREATE',
        data: 
          { content: content,
          id: '',  // tämä muutetaan myöh.
          votes: 0 }
      }  
      return newAnec 
      
    }


export default reducer