import React, { useState, useEffect } from 'react'
import axios from 'axios'


import './App.css'
import Results from './components/Results'

import Carousel, { CarouselItem } from './component/Carousel'


import Compare from './components/compare';
import Add from './components/add';
import Edit from './components/edit';
import './App.css'

const App = () => {
  const key = 104417709088771
  let [combatant, setCombatant] = useState([])
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
  let [stage, setStage] = useState([])


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

  const getStages = () => {
    axios.get('http://localhost:8000/api/Stage')
      .then(
        (response) => setStage(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    getCombatant()
    getStages()
  }, [])


  //-----------------------------------------------
  //  ADD
  //-----------------------------------------------
  const handleCreate = (addCharacter) => {
    axios
      .post('http://localhost:8000/api/matches', addCharacter)
      .then((response) => {
        console.log(response)
        getCombatant()
      })
  }

  //-----------------------------------------------
  //  Delete
  //-----------------------------------------------
  const handleDelete = (event) => {
    axios
      .delete('http://localhost:8000/api/matches/' + event.target.value)
      .then((response) => {
        getCombatant()
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
        getCombatant()
      })
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
      image: results.image.url
    })
  }


  

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

  // switches to the next 5 heros
  const handleNext = (e) => {
    e.preventDefault()
    setNext1(next1 += 5)
    setNext(next += 5)
  }
  // switches to the previous 5 heros
  const handelPrevious = (e) => {
    e.preventDefault()
    if (next1 >= 5) {
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
          <a href='#' onClick={handleSort}>Sort from z to a</a>
          <a href='#' onClick={handleSortByStrength}>Strength high to low</a>
        </div>
      </div>
      <h1>Search for Combatants</h1>
      <input type='text' placeholder='search...' onChange={handleSearchChange} />
      <button onClick={getSearch}>Search</button>
      {/* <button onClick={() => getSearch()}>Search</button> */}
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
                <input type="number" name="durability" value={player1.durability} onChange={handlePlayerStats}/>
                <br />
                <br />
                <label htmlFor="power">power: </label>
                <input type="number" name="power" value={player1.power} onChange={handlePlayerStats}/>
                <br />
                <br />
                <label htmlFor="comabt">combat: </label>
                <input type="number" name="combat" value={player1.combat} onChange={handlePlayerStats}/><br />
                <input type="submit" />
              </form>
            </details>
          </div>
          <div className='flex-child' id='black'>
            <h1 className='center'>VS</h1>
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
                <input type="number" name="durability" value={player2.durability} onChange={handlePlayerStats2}/>
                <br />
                <br />
                <label htmlFor="power">power: </label>
                <input type="number" name="power" value={player2.power} onChange={handlePlayerStats2}/>
                <br />
                <br />
                <label htmlFor="comabt">combat: </label>
                <input type="number" name="combat" value={player2.combat} onChange={handlePlayerStats2}/><br />
                <input type="submit" />
              </form>
            </details>
          </div>
        </div>
        :
        <p></p>}
      {show ?
        <div className='searchCard'>
          <h3>{results.name}</h3>
          <img src={results.image.url} alt={results.name} />
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
        <p></p>}
      <Results results={results} updatePlayer1={updatePlayer1} updatePlayer2={updatePlayer2} search={search} setPlayer1={setPlayer1} setPlayer2={setPlayer2} />
      {hide === 'false' ? <p></p> : <div><button onClick={handelPrevious}>Previous</button>
        <div className='far-right'>
          <button onClick={handleNext} type='button'>Next</button>
        </div>
      </div>}
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
