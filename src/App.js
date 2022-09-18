import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Results from './components/Results'

import Compare from './components/compare';

import Add from './components/add';
import Edit from './components/edit';
import Stage from './components/stage'
import Matches from './components/Matches'
import Match from './components/Match'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  const key = 104417709088771
  const [matches, setMatches] = useState([])
  const [newMatch, setNewMatch] = useState({
    matchName: '',
    nameP1: '',
    realNameP1: '',
    speciesP1: '',
    intelligenceP1: 0,
    strengthP1: 0,
    speedP1: 0,
    durabilityP1: 0,
    powerP1: 0,
    imageP1: '',
    nameP2: '',
    realNameP2: '',
    speciesP2: '',
    intelligenceP2: 0,
    strengthP2: 0,
    speedP2: 0,
    durabilityP2: 0,
    powerP2: 0,
    imageP2: ''
  })
  const [selMatch, setSelMatch] = useState({
    matchName: '',
    nameP1: '',
    realNameP1: '',
    speciesP1: '',
    intelligenceP1: 0,
    strengthP1: 0,
    speedP1: 0,
    durabilityP1: 0,
    powerP1: 0,
    imageP1: '',
    nameP2: '',
    realNameP2: '',
    speciesP2: '',
    intelligenceP2: 0,
    strengthP2: 0,
    speedP2: 0,
    durabilityP2: 0,
    powerP2: 0,
    imageP2: ''
  })
  const [superHero, setSuperHero] = useState([])
  const [hide, setHide] = useState('false')
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [matchName, setMatchName] = useState('')
  const [player1, setPlayer1] = useState({})
  const [player2, setPlayer2] = useState({})
  const [show, setShow] = useState(false)
  const [showMatch, setShowMatch] = useState(false)
  let [next, setNext] = useState(5)
  let [next1, setNext1] = useState(0)
  let [compare, setCompare] = useState(false)
  let [stage, setStage] = useState([])
  let [background, setBackground] = useState('')
  let [showStage, setShowStage] = useState(false)




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
  //  ADD Stage
  //-----------------------------------------------
  const handleCreate = (addImage) => {
    let nextId = stage[stage.length - 1].id + 1
    axios.post('http://localhost:8000/api/Stage', addImage)
      .then((response) => {
        addImage.id = nextId
        setStage([...stage, response.data])
        console.log(addImage)
      })
  }

  //-----------------------------------------------
  //  Delete Stage
  //-----------------------------------------------
  const handleDelete = (event) => {
    axios
      .delete('http://localhost:8000/api/Stage/' + event.target.value)
      .then((response) => {
        getStages()
      })
    setShowMatch(false)
  }

  const handleChangeBackground = (editBackground) => {
    setBackground(editBackground.nameOfStage)
    console.log(editBackground)
  }


  //-----------------------------------------------
  //  Edit Stage
  //-----------------------------------------------
  const handleUpdate = (editImage) => {
    console.log(editImage);
    axios.put('http://localhost:8000/api/Stage/' + editImage.id, editImage)
      .then((response) => {
        setStage(stage.map((image) => {
          return image.id !== editImage ? image : editImage
        }))
      })
  }
  //-----------------------------------------------
  //  EDIT MATCH
  //-----------------------------------------------
  const handleUpdateMatch = (event) => {
    axios
      .put('http://localhost:8000/api/matches/' + event.target.value.id, event.target.value)
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
    getSearch()
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
      intelligenceP1: player1.intelligence,
      strengthP1: player1.strength,
      speedP1: player1.speed,
      durabilityP1: player1.durability,
      powerP1: player1.power,
      imageP1: player1.image,
      nameP2: player2.name,
      realNameP2: player2.realName,
      speciesP2: player2.species,
      intelligenceP2: player2.intelligence,
      strengthP2: player2.strength,
      speedP2: player2.speed,
      durabilityP2: player2.durability,
      powerP2: player2.power,
      imageP2: player2.image
    })
  }
  const confirmNewMatch = (newMatch) => {
    addMatch(newMatch)
  }

  //-----------------------------------------------
  //  NAMES THE MATCH
  //-----------------------------------------------
  const handleMatchNameChange = (event) => {
    event.preventDefault()
    // setMatchName(event.target.value)
    setNewMatch({ ...newMatch, [event.target.name]: event.target.value })
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
          <Matches matches={matches} setShowMatch={setShowMatch} setCompare={setCompare} setSelMatch={setSelMatch} handleDelete={handleDelete} />
        </div>
      </div>
      <h1>Search for Combatants</h1>
      <form>
        <input type='text' placeholder='search...' onChange={handleSearchChange} />
        <button onClick={() => getSearch()}>Search</button>
      </form>
      {showMatch ? <Match selMatch={selMatch} setShowMatch={setShowMatch} handleDelete={handleDelete} handleUpdateMatch={handleUpdateMatch} /> : <></>}

      <button onClick={handleCompare}>compare</button>
      {/* <Add handleCreate={handleCreate} /> */}
      {compare ?
        <div className='flex-container'>
          <div className='flex-child magenta'>
            <img className='resize' id='full' src={player1.image} alt={player1.name} />
            <h3>Name: {player1.name}</h3>
            <h4>Stats: </h4>
            <ul>
              <li>Intelligence: {player1.intelligence}</li>
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

            <h2>{newMatch.matchName}</h2>
            <input type='text' name="matchName" placeholder='Input Name...' onChange={handleMatchNameChange} required='true' />
            <button onClick={() => handleAddNewMatch()}>Update Name</button>

            <h1 className='center'>VS</h1>
            <button onClick={() => confirmNewMatch(newMatch)} >Confirm</button>

          </div>
          <div className='flex-child green'>
            <img id='full' className='resize' src={player2.image} alt={player2.name} />
            <h3>Name: {player2.name}</h3>
            <h4>Stats: </h4>
            <ul>
              <li>Intelligence: {player2.intelligence}</li>
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
                <input type="number" name="intelligence" value={player2.intelligence} onChange={handlePlayerStats2} />
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
          :
          <p></p>
      }
          {showStage ? <>
            <div className="row">
              {stage.map((image) => {
                return (
                  <div key={image.id} className="column">
                    <img className='resize' src={image.nameOfStage} />
                    <Edit handleUpdate={handleUpdate} image={image} />
                    <button onClick={handleDelete} value={image.id}>
                      X
                    </button>
                    <Stage handleChangeBackground={handleChangeBackground} image={image} />
                  </div>
                )
              })}
            </div>
          </> : <p hidden></p>}
          <Results results={results} search={search} setPlayer1={setPlayer1} setPlayer2={setPlayer2} />

          {hide === 'false' ? <p hidden></p> :
            <div>
              <button onClick={handelPrevious}>Previous</button>
              <div className='far-right'>
                <button onClick={handleNext} type='button'>Next</button>
              </div>
            </div>}
          <div className="flex-container">
            {hide === 'false' ? <p hidden></p> : superHero.slice(next1, next).map((superheros) => {
              return (

                <div key={superheros.id} className="flex-child">
                  <h4>Name: {superheros.name}</h4>
                  <p><b>Real Name: </b>{superheros.biography.fullName}</p>
                  <p><b>Species: </b>{superheros.appearance.race}</p>
                  <img src={superheros.images.sm} />
                  <h4>Stats</h4>
                  <ul>
                    <li>intelligence: {superheros.powerstats.intelligence}</li>
                    <li>Strength: {superheros.powerstats.strength}</li>
                    <li>Speed: {superheros.powerstats.speed}</li>
                    <li>Durability: {superheros.powerstats.durability}</li>
                    <li>Power: {superheros.powerstats.power}</li>

                    <button onClick={() => setPlayer1({
                      name: superheros.name,
                      realName: superheros.biography.fullName,
                      species: superheros.appearance.race,
                      intelligence: Number(superheros.powerstats.intelligence),
                      strength: Number(superheros.powerstats.strength),
                      speed: Number(superheros.powerstats.speed),
                      durability: Number(superheros.powerstats.durability),
                      power: Number(superheros.powerstats.power),
                      image: superheros.images.sm
                    })}>Add to player 1</button>

                    <button onClick={() => setPlayer2({
                      name: superheros.name,
                      realName: superheros.biography.fullName,
                      species: superheros.appearance.race,
                      intelligence: Number(superheros.powerstats.intelligence),
                      strength: Number(superheros.powerstats.strength),
                      speed: Number(superheros.powerstats.speed),
                      durability: Number(superheros.powerstats.durability),
                      power: Number(superheros.powerstats.power),
                      image: superheros.images.sm
                    })}>Add to player 2</button>
                  </ul>
                </div>
              )
            })}

          </div>

        </>
  )
}


      export default App
