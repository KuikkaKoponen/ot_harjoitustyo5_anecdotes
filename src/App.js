import React from 'react'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  return (
    <div>
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default App

// käytetään ei-kontrolloitua lomaketta eli ei ole stateja inputtille ja changille kuten ennen tehty