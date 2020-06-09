import React from 'react'
import {useDispatch } from 'react-redux'
import  {createAnec } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  
  const dispatch = useDispatch()
  const create = (event) => {    
    event.preventDefault()
    const content = event.target.anec.value
    dispatch(createAnec(content)) 
    event.target.anec.value = ''
    console.log('create', content)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={create}>
        <input name="anec" />
        <button type="submit">create</button>
      </form>
    </div>
  ) 
}

export default AnecdoteList