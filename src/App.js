import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Compare from './components/compare';

const App = () => {
  const key = 104417709088771
  let [combatant, setCombatant] = useState([])
  let [superHero, setSuperHero] = useState([])
  let [hide, setHide] = useState('false')
  let [search, setSearch] = useState('')
  let [results, setResults] = useState()
  let [player1, setPlayer1] = useState()
  let [player2, setPlayer2] = useState()
  let [show, setShow] = useState(false)




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


  //-----------------------------------------------
  //  GET OUR DATA (MATCHES, COMBATS, COMPARISONS)
  //-----------------------------------------------
  const getCombatant = () => {
    axios.get('http://localhost:8000/api/matches')
      .then(
        (response) => setCombatant(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }




  let truefalse = () => {
    if (hide === 'false') {
      setHide('true')
    }
    if (hide === 'true') {
      setHide('false')
    }
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
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          <a href="#" onClick={truefalse}>List of Heros</a>
        </div>
      </div>
      <h1>Search for Combatants</h1>
      <input type='text' placeholder='search...' onChange={handleSearchChange} />
      <button onClick={getSearch}>Search</button>
      <button onClick={handleShow}>Show</button>
      {show ?  : <p></p>}
      {hide === 'false' ? <p hidden></p> : superHero.map((superheros) => {
        return (
          <div key={superheros.id}>
            <hr />
            <img src={superheros.images.sm} />
            <h4>Name: {superheros.name}</h4>
            <h4>Power Stats</h4>
            <ul>
              <li>intelligence: {superheros.powerstats.intelligence}</li>
              <li>strength: {superheros.powerstats.strength}</li>
              <li>speed: {superheros.powerstats.speed}</li>
              <li>durability: {superheros.powerstats.durability}</li>
              <li>power: {superheros.powerstats.power}</li>
              <li>combat: {superheros.powerstats.combat}</li>
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default App
