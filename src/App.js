import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const key = 104417709088771
  let [combatant, setCombatant] = useState([])
  let [superHero, setSuperHero] = useState([])
  let [search, setSearch] = useState('')
  let [results, setResults] = useState()
  let [player1, setPlayer1] =useState()
  let [player2, setPlayer2] =useState()
  let [show, setShow] =useState(false)


//-----------------------------------------------
//  GET OUR DATA (MATCHES, COMBATS, COMPARISONS)
//-----------------------------------------------
  const getCombatant = () => {
    axios.get('http://localhost:8000/api/combatant')
      .then(
        (response) => setCombatant(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleShow = () => {
      setShow(true)
  }

  const getSearch = () => {
    console.log('https://www.superheroapi.com/api/' + key + '/search/' + search)
    axios.get('https://www.superheroapi.com/api.php/' + key + '/search/' + search)
      .then(
        (response) => setResults(response.data.results[0]),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
    console.log(results)

  }

  useEffect(() => {
    getCombatant()
  }, [])

  return (
    <>
      <h1>Search for Combatants</h1>
      <input type='text' placeholder='search...' onChange={handleSearchChange}/>
      <button onClick={getSearch}>Search</button>
      <button onClick={handleShow}>Show</button>
      {show ? <p>{results.powerstats.combat}</p> : <p></p> }

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
