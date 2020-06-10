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

    const notification = {
      type: 'FLAG',
      content: content
    }
    dispatch(notification)
    
    const setnull = {
      type: 'SETNULL'
    }
    setTimeout(() => {
      dispatch(setnull)
    }, 3000)

    // pari sekkaa ja mene nollaan
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