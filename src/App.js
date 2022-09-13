import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel, { CarouselItem } from './component/Carousel'
import './App.css'
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
//-----------------------------------------------
//  GET OUR DATA (MATCHES)
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

  //-----------------------------------------------
  //  SEARCH
  //-----------------------------------------------

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
  }

  //-----------------------------------------------
  //  UPDATE PLAYERS
  //-----------------------------------------------

  const updatePlayer1 = () => {
    setPlayer1({
      name: results.name,
      intellegence: results.powerstats.intelligence,
      strength: results.powerstats.strength,
      speed: results.powerstats.speed,
      durability: results.powerstats.durability,
      power: results.powerstats.power,
      combat: results.powerstats.combat,
      image: results.image.url
    })
  }
  const updatePlayer2 = () => {
    setPlayer2({
      name: results.name,
      intellegence: results.powerstats.intelligence,
      strength: results.powerstats.strength,
      speed: results.powerstats.speed,
      durability: results.powerstats.durability,
      power: results.powerstats.power,
      combat: results.powerstats.combat,
      images: results.image.url
    })
  }

  useEffect(() => {
    getCombatant()
  }, [])

   //-----------------------------------------------
  //  Sort Heros
  //-----------------------------------------------
  const handleSort = () => {
    superHero.sort()
  }


  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          <a href="#" onClick={truefalse}>List of Heros</a>
          <a href='#' onClick={handleSort}>Sort Alphabetically</a>
        </div>
      </div>
      <h1>Search for Combatants</h1>
      <input type='text' placeholder='search...' onChange={handleSearchChange} />
      <button onClick={getSearch}>Search</button>
      <button onClick={handleShow}>Show</button>
      {show ?
        <div className= 'searchCard'>
          <h3>{results.name}</h3>
          <img src={results.image.url} alt={results.name}/>
          <h4>Stats: </h4>
          <ul>
            <li>Intellegence: {results.powerstats.intelligence}</li>
            <li>Strength: {results.powerstats.strength}</li>
            <li>Speed: {results.powerstats.speed}</li>
            <li>Durability: {results.powerstats.durability}</li>
            <li>Power: {results.powerstats.power}</li>
            <li>Combat: {results.powerstats.combat}</li>
          </ul>
          <button onClick={updatePlayer1}>Add to player 1</button>
          <button onClick={updatePlayer2}>Add to player 2</button>
        </div>
        :
        <p></p> }
      {hide === 'false' ? <p hidden></p> : superHero.map((superheros) => {
        return(
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
          <div className='App'>
        <Carousel>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem> Item 2</CarouselItem>
          <CarouselItem>Item  3</CarouselItem>
        </Carousel>
      </div>
    </>
  )
}

export default App
