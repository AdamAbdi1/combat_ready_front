import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Results from './components/Results'
import Carousel, { CarouselItem } from './component/Carousel'
import Compare from './components/compare';

const App = () => {
  const key = 104417709088771
  let [matches, setMatches] = useState([])
  let [superHero, setSuperHero] = useState([])
  let [hide, setHide] = useState('false')
  let [search, setSearch] = useState('')
  let [results, setResults] = useState([])
  let [player1, setPlayer1] = useState({})
  let [player2, setPlayer2] = useState({})
  let [show, setShow] = useState(false)
  let [next, setNext] = useState(5)
  let [next1, setNext1] = useState(0)
  let [compare, setCompare] = useState(false)

  //-----------------------------------------------
  //  GET DATA FOR LIST OF HEROS
  //-----------------------------------------------
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
  const getMatches = () => {
    axios.get('http://localhost:8000/api/matches')
      .then(
        (response) => setMatches(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }
  //-----------------------------------------------
  //  HIDES LIST OF SUPERHEROS
  //-----------------------------------------------
  let truefalse = () => {
    if (hide === 'false') {
      setHide('true')
    }
    if (hide === 'true') {
      setHide('false')
    }
  }

  //-----------------------------------------------
  //  SEARCH FUNCTIONS
  //-----------------------------------------------
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const getSearch = (event) => {
    axios.get('https://www.superheroapi.com/api.php/' + key + '/search/' + search)
      .then(
        (response) => setResults(response.data.results),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    getMatches()
  }, [])

   //-----------------------------------------------
  //  Sort Heros
  //-----------------------------------------------
  const handleSort = () => {
    superHero.sort()
  }

  //-----------------------------------------------
  //  SWITCHES TO THE NEXT 5 HEROS
  //-----------------------------------------------
  const handleNext = (e) => {
    e.preventDefault()
    setNext1(next1 += 5)
    setNext(next += 5)
  }

  //-----------------------------------------------
  //  SWITCHES TO THE PREVIOUS 5 HEROS
  //-----------------------------------------------
  const handelPrevious = (e) => {
    e.preventDefault()
    if(next1 >= 5){
      setNext1(next1 -= 5)
      setNext(next -= 5)
    }
  }

  //-----------------------------------------------
  //  HIDES THE SEARCHES SHOW AND SHOWS THE MATCH
  //-----------------------------------------------
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
<form>
      <input type='text' placeholder='search...' onChange={handleSearchChange} />
      <button onClick={() => getSearch()}>Search</button>
</form>
      <button onClick={handleCompare}>compare</button>
      {compare ?
       <div className='flex-container'>
        <div className='flex-child magenta'>
       <img className='resize' src={player1.image} alt={player1.name}/>
       <h3>{player1.name}</h3>
       <p><b>Real Name: </b>{player1.realName}</p>
       <p><b>Species: </b>{player1.species}</p>
       <h4>Stats: </h4>
       <ul>
         <li>Intellegence: {player1.intellegence}</li>
         <li>Strength: {player1.strength}</li>
         <li>Speed: {player1.speed}</li>
         <li>Durability: {player1.durability}</li>
         <li>Power: {player1.power}</li>
       </ul>
       </div>
       <div className='flex-child green' id='black'>
       <h1 className='center'>VS</h1>
       </div>
       <div className='flex-child magenta'>
       <img className='resize' src={player2.image} alt={player2.name}/>
       <h3>{player2.name}</h3>
       <p><b>Real Name: </b>{player2.realName}</p>
       <p><b>Species: </b>{player2.species}</p>
       <h4>Stats: </h4>
       <ul>
         <li>Intellegence: {player2.intellegence}</li>
         <li>Strength: {player2.strength}</li>
         <li>Speed: {player2.speed}</li>
         <li>Durability: {player2.durability}</li>
         <li>Power: {player2.power}</li>
       </ul>
       </div>
     </div>
       :
       <p></p>}

        <Results results={results} search={search} setPlayer1={setPlayer1} setPlayer2={setPlayer2} />
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
