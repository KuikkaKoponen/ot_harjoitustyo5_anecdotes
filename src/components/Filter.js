import React from 'react'
import { useDispatch } from 'react-redux'

const Filter = () => {
  
  const dispatch = useDispatch()
  const handleChange = (event) => {
      
    // input-kentän arvo muuttujassa event.target.value
    const filter = {
      type: 'FILTER',
      content: event.target.value
    }
    dispatch(filter)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter