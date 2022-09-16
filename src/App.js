import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Results from './components/Results'
import Carousel, { CarouselItem } from './component/Carousel'
import Compare from './components/compare';

import Add from './components/add';
import Edit from './components/edit';
import Matches from './components/Matches'
import AddMatch from './components/AddMatch'

const App = () => {
  const key = 104417709088771
  let [matches, setMatches] = useState([])
  let [newMatch, setNewMatch] = useState({})
  let [superHero, setSuperHero] = useState([])
  let [hide, setHide] = useState('false')
  let [search, setSearch] = useState('')
  let [results, setResults] = useState([])
  let [matchName, setMatchName] = useState('')
  let [player1, setPlayer1] = useState({})
  let [player2, setPlayer2] = useState({})
  let [show, setShow] = useState(false)
  let [next, setNext] = useState(5)
  let [next1, setNext1] = useState(0)
  let [compare, setCompare] = useState(false)
  let [stage, setStage] = useState([])



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
    getMatches()
    getStages()
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
  //  ADD MATCH
  //-----------------------------------------------
  const addMatch = (newMatch) => {
    console.log(newMatch)
    axios.post('http://localhost:8000/api/matches', newMatch)
      .then(
        (response) => {
          setMatches([...matches, response.data])
        })
  }



  const getStages = () => {
    axios.get('http://localhost:8000/api/Stage')
      .then(
        (response) => setStage(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }



  //-----------------------------------------------
  //  ADD
  //-----------------------------------------------
  const handleCreate = (addCharacter) => {
    axios
      .post('http://localhost:8000/api/matches', addCharacter)
      .then((response) => {
        console.log(response)
        getMatches()
      })
  }

  //-----------------------------------------------
  //  Delete
  //-----------------------------------------------
  const handleDelete = (event) => {
    axios
      .delete('http://localhost:8000/api/matches/' + event.target.value)
      .then((response) => {
        getMatches()
      })
  }


  //-----------------------------------------------
  //  Edit
  //-----------------------------------------------
  const handleUpdate = (editCharacter) => {
    console.log(editCharacter)
    axios
      .put('http://localhost:8000/api/matches/' + editCharacter.id, editCharacter)
      .then((response) => {
        getMatches()
      })
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

  const handlePlayerStats = (e) => {
    setPlayer1({ ...player1, [e.target.name]: e.target.value })

  }

  const handlePlayerStats2 = (e) => {
    setPlayer2({ ...player2, [e.target.name]: e.target.value })

  }

  const handlePlayer1 = (event) => {
    event.preventDefault()
    // setPlayer1(player1)
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
    setSuperHero([...superHero].sort((a, b) => b.id - a.id))
  }

  const handleSortByStrength = () => {
    console.log('hi')
    setSuperHero([...superHero].sort((a, b) => b.powerstats.strength - a.powerstats.strength))
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
    if (next1 >= 5) {
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


  const handleAddNewMatch = () => {
    setNewMatch({
      matchName: matchName,
      nameP1: player1.name,
      realNameP1: player1.realName,
      speciesP1: player1.species,
      intelligenceP1: player1.intellegence,
      strengthP1: player1.strength,
      speedP1: player1.speed,
      durabilityP1: player1.durability,
      powerP1: player1.power,
      imageP1: player1.image,
      nameP2: player2.name,
      realNameP2: player2.realName,
      speciesP2: player2.species,
      intelligenceP2: player2.intellegence,
      strengthP2: player2.strength,
      speedP2: player2.speed,
      durabilityP2: player2.durability,
      powerP2: player2.power,
      imageP2: player2.image
    })
    addMatch(newMatch)
  }
  const confirmNewMatch = (newMatch) => {
    addMatch(newMatch)
  }

  //-----------------------------------------------
  //  NAMES THE MATCH
  //-----------------------------------------------
  const handleMatchNameChange = (event) => {
    setMatchName(event.target.value)
  }


  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">Options</button>
        <div className="dropdown-content">
          <a href="#" onClick={truefalse}>List of Heros</a>
          <a href='#' onClick={handleSort}>Sort from z to a</a>
          <a href='#' onClick={handleSortByStrength}>Strength high to low</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Matches</button>
        <div className="dropdown-content">
          <Matches matches={matches} />
        </div>
      </div>
      <h1>Search for Combatants</h1>
      <form>
        <input type='text' placeholder='search...' onChange={handleSearchChange} />
        <button onClick={() => getSearch()}>Search</button>
      </form>
      <button onClick={handleCompare}>compare</button>
      {/* <Add handleCreate={handleCreate} /> */}
      {compare ?
        <div className='flex-container'>
          <div className='flex-child magenta'>
            <img className='resize' id='full' src={player1.image} alt={player1.name} />
            <h3>Name: {player1.name}</h3>
            <h4>Stats: </h4>
            <ul>
              <li>Intellegence: {player1.intelligence}</li>
              <li>Strength: {player1.strength}</li>
              <li>Speed: {player1.speed}</li>
              <li>Durability: {player1.durability}</li>
              <li>Power: {player1.power}</li>
              <li>Combat: {player1.combat}</li>
            </ul>
            <details>
              <form onSubmit={handlePlayer1}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={player1.name} onChange={handlePlayerStats} />
                <br />
                <br />
                <label htmlFor="intelligence">intelligence: </label>
                <input type="number" name="intelligence" value={player1.intelligence} onChange={handlePlayerStats} />
                <br />
                <br />
                <label htmlFor="strength">strength: </label>
                <input type="number" name="strength" value={player1.strength} onChange={handlePlayerStats} />
                <br />
                <br />
                <label htmlFor="speed">speed: </label>
                <input type="number" name="speed" value={player1.speed} onChange={handlePlayerStats} />
                <br />
                <br />
                <label htmlFor="durability">Durability: </label>
                <input type="number" name="durability" value={player1.durability} onChange={handlePlayerStats} />
                <br />
                <br />
                <label htmlFor="power">power: </label>
                <input type="number" name="power" value={player1.power} onChange={handlePlayerStats} />
                <br />
                <br />
                <label htmlFor="comabt">combat: </label>
                <input type="number" name="combat" value={player1.combat} onChange={handlePlayerStats} /><br />
                <input type="submit" />
              </form>
            </details>
          </div>
          <div className='flex-child' id='black'>
            <input type='text' placeholder='search...' onChange={handleMatchNameChange} />
            <h1 className='center'>VS</h1>
            <button onClick={() => handleAddNewMatch()} >Add Match</button>
            <button onClick={() => confirmNewMatch(newMatch)} >Confirm</button>
          </div>
          <div className='flex-child green'>
            <img id='full' className='resize' src={player2.image} alt={player2.name} />
            <h3>Name: {player2.name}</h3>
            <h4>Stats: </h4>
            <ul>
              <li>Intellegence: {player2.intellegence}</li>
              <li>Strength: {player2.strength}</li>
              <li>Speed: {player2.speed}</li>
              <li>Durability: {player2.durability}</li>
              <li>Power: {player2.power}</li>
              <li>Combat: {player2.combat}</li>
            </ul>
            <details>
              <form>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={player2.name} onChange={handlePlayerStats2} />
                <br />
                <br />
                <label htmlFor="intelligence">intelligence: </label>
                <input type="number" name="intellegence" value={player2.intellegence} onChange={handlePlayerStats2} />
                <br />
                <br />
                <label htmlFor="strength">strength: </label>
                <input type="number" name="strength" value={player2.strength} onChange={handlePlayerStats2} />
                <br />
                <br />
                <label htmlFor="speed">speed: </label>
                <input type="number" name="speed" value={player2.speed} onChange={handlePlayerStats2} />
                <br />
                <br />
                <label htmlFor="durability">Durability: </label>
                <input type="number" name="durability" value={player2.durability} onChange={handlePlayerStats2} />
                <br />
                <br />
                <label htmlFor="power">power: </label>
                <input type="number" name="power" value={player2.power} onChange={handlePlayerStats2} />
                <br />
                <br />
                <label htmlFor="comabt">combat: </label>
                <input type="number" name="combat" value={player2.combat} onChange={handlePlayerStats2} /><br />
                <input type="submit" />
              </form>
            </details>
          </div>
        </div>
        :
        <p></p>
      }
      <Results results={results} search={search} setPlayer1={setPlayer1} setPlayer2={setPlayer2} />
      <div><button onClick={handelPrevious}>Previous</button>
        <div className='far-right'>
          <button onClick={handleNext} type='button'>Next</button>
        </div>
      </div>
      <div className="flex-container">
        {hide === 'false' ? <p hidden></p> : superHero.slice(next1, next).map((superheros) => {
          return (

            <div key={superheros.id} className="flex-child">
              <h4>Name: {superheros.name}</h4>
              <img src={superheros.images.sm} />
              <h4>Stats</h4>
              <ul>
                <li>Intelligence: {superheros.powerstats.intelligence}</li>
                <li>Strength: {superheros.powerstats.strength}</li>
                <li>Speed: {superheros.powerstats.speed}</li>
                <li>Durability: {superheros.powerstats.durability}</li>
                <li>Power: {superheros.powerstats.power}</li>
                <li>Combat: {superheros.powerstats.combat}</li>
              </ul>
            </div>
          )
        })}

      </div>
      {/* <div className='App'>
        <Carousel>
          <CarouselItem>
          <img className='dangerroom' src='https://static.wikia.nocookie.net/marvelvscapcom/images/e/e8/Danger_Room_Cota.png/revision/latest/scale-to-width-down/768?cb=20170908085232'
          />
          </CarouselItem>
          <CarouselItem> Item 2</CarouselItem>
          <CarouselItem>Item  3</CarouselItem>
        </Carousel>
      </div> */}

    </>
  )
}

export default App
