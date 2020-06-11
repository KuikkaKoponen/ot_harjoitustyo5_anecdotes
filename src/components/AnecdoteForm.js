import React from 'react'
//import { useDispatch } from 'react-redux'
import { createAnec } from '../reducers/anecdoteReducer' // tarkkana aaltosulkujen kanssa ellei oo export default
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
  
  //const dispatch = useDispatch()
  // dispachin sijaan käytetään sittenkin connectioa (vanha tapa)
  
  const createNew = async (event) => {    
    event.preventDefault()
    const content = event.target.anec.value
    event.target.anec.value = ''
    console.log('create', content)
     
    // kaikki lisäykseen liittyvä absrahoitu reducereihin
    //dispatch(createAnec(content))
    //dispatch(setNotification(`you created '${content}'`, 5))

    // connectin käyttöä, yläpuolella uusi useDispatch tapa
    props.createAnec(content)
    props.setNotification(`you created '${content}'`, 5) 

    /* vanha tapa, uusi on abstahoitu hyödyntäen redux thunkia
    // lähettää enecdootin palvelimelle ja saa {contennt: ..., id:..., votes: 0} takaisin
    const newAnec = await anecdoteService.createNew(content)
    // tallennetaan storageen saatu anecdootti
    dispatch(createAnec(newAnec))
    */
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createNew}>
        <input name="anec" />
        <button type="submit">create</button>
      </form>
    </div>
  ) 
}

// tämä dispachaa oliot
const mapDispatchToProps = {
  createAnec, setNotification
}

const ConnectedNotes = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedNotes

//export default AnecdoteForm