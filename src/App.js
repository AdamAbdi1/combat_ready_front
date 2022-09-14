import React, { useState, useEffect } from 'react'
import axios from 'axios'


import './App.css'
import Results from './components/Results'

import Carousel, { CarouselItem } from './component/Carousel'


import Compare from './components/compare';



const App = () => {
  const key = 104417709088771
  let [combatant, setCombatant] = useState([])
  let [superHero, setSuperHero] = useState([])
  let [hide, setHide] = useState('false')
  let [search, setSearch] = useState('')
  let [results, setResults] = useState([])
  let [player1, setPlayer1] = useState()
  let [player2, setPlayer2] = useState()
  let [show, setShow] = useState(false)
  let [next, setNext] = useState(5)
  let [next1, setNext1] = useState(0)
  let [compare, setCompare] = useState(false)




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

  // hides the list of superheros
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


  const getSearch = () => {
    console.log('https://www.superheroapi.com/api/' + key + '/search/' + search)
    axios.get('https://www.superheroapi.com/api.php/' + key + '/search/' + search)
      .then(
        (response) => setResults(response.data.results),
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
  // switches to the next 5 heros
  const handleNext = (e) => {
    e.preventDefault()
    setNext1(next1 += 5)
    setNext(next += 5)
  }
  // switches to the previous 5 heros
  const handelPrevious = (e) => {
    e.preventDefault()
    if(next1 >= 5){
      setNext1(next1 -= 5)
      setNext(next -= 5)
    }
  }
  // hides the searches show and shows the match
  const handleCompare = () => {
    if (compare === false) {
      setCompare(true)
    }
    if (compare === true) {
      setCompare(false)
    }
    setShow(false)
  }


  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">Options</button>
        <div className="dropdown-content">
          <a href="#" onClick={truefalse}>List of Heros</a>
          <a href='#' onClick={handleSort}>Sort Alphabetically</a>
        </div>
      </div>
      <h1>Search for Combatants</h1>
      <input type='text' placeholder='search...' onChange={handleSearchChange} />
      <button onClick={() => getSearch()}>Search</button>

      <button onClick={handleCompare}>compare</button>
      {compare ?
       <div className='flex-container'>
        <div className='flex-child magenta'>
       <img className='resize' src={player1.image} alt={player1.name}/>
       <h3>{player1.name}</h3>
       <h4>Stats: </h4>
       <ul>
         <li>Intellegence: {player1.intelligence}</li>
         <li>Strength: {player1.strength}</li>
         <li>Speed: {player1.speed}</li>
         <li>Durability: {player1.durability}</li>
         <li>Power: {player1.power}</li>
         <li>Combat: {player1.combat}</li>
       </ul>
       </div>
       <div className='flex-child green' id='black'>
       <h1 className='center'>VS</h1>
       </div>
       <div className='flex-child magenta'>
       <img className='resize' src={player2.images} alt={player2.name}/>
       <h3>{player2.name}</h3>
       <h4>Stats: </h4>
       <ul>
         <li>Intellegence: {player2.intelligence}</li>
         <li>Strength: {player2.strength}</li>
         <li>Speed: {player2.speed}</li>
         <li>Durability: {player2.durability}</li>
         <li>Power: {player2.power}</li>
         <li>Combat: {player2.combat}</li>
       </ul>
       </div>
     </div>
       :
       <p></p>}
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
        <Results results={results} updatePlayer1={updatePlayer1} updatePlayer2={updatePlayer2} search={search}/>
      <div className="flex-container">
      {hide === 'false' ? <p hidden></p> : superHero.slice(next1, next).map((superheros) => {

        return(
          <div key={superheros.id} className="flex-child">
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

      </div>
      {hide === 'false' ? <p></p>:<div><button onClick={handelPrevious}>Previous</button>
      <div className='far-right'>
      <button onClick={handleNext} type='button'>Next</button>
      </div>
      </div> }

          <div className='App'>
        <Carousel>
          <CarouselItem>
          <img className='dangerroom' src='https://static.wikia.nocookie.net/marvelvscapcom/images/e/e8/Danger_Room_Cota.png/revision/latest/scale-to-width-down/768?cb=20170908085232'
          />
          </CarouselItem>
          <CarouselItem> Item 2</CarouselItem>
          <CarouselItem>Item  3</CarouselItem>
        </Carousel>
      </div>

    </>
  )
}

export default App
