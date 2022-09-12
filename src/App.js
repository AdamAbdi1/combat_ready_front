import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  let [combatant, setCombatant] = useState([])

  const getCombatant = () => {
    axios.get('http://localhost:8000/api/combatant')
      .then(
        (response) => setCombatant(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    getCombatant()
  }, [])

  return (
    <>
      <h1>App</h1>
    </>
  )
}

export default App
