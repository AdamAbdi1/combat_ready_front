import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  let [combatant, setCombatant] = useState([])
  let [superHero, setSuperHero] = useState([])

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

  const getSuperHero = () => {
    axios.get('https://akabab.github.io/superhero-api/api/all.json')
      .then(
        (response) => setSuperHero(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    getSuperHero()
  }, [])

  return (
    <>
      <h1>list of superhero's</h1>
      {superHero.map((superheros) => {
        return(
          <div key={superheros.id}>
          <hr/>
          <img src={superheros.images.sm}/>
          <h4>Name: {superheros.name}</h4>
          <h4>intelligence: {superheros.powerstats.intelligence}</h4>
          <h4>strength: {superheros.powerstats.strength}</h4>
          <h4>speed: {superheros.powerstats.speed}</h4>
          <h4>durability: {superheros.powerstats.durability}</h4>
          <h4>power: {superheros.powerstats.power}</h4>
          <h4>combat: {superheros.powerstats.combat}</h4>
          </div>
        )
      })}
    </>
  )
}

export default App
