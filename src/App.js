import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Compare from './components/compare';

const App = () => {

  let [combatant, setCombatant] = useState([])
  let [superHero, setSuperHero] = useState([])
  let [hide, setHide] = useState('false')
  let [player1, setPlayer1] = useState([])


  // const getCombatant = () => {
  //   axios.get('http://localhost:8000/api/combatant')
  //     .then(
  //       (response) => setCombatant(response.data),
  //       (err) => console.error(err)
  //     )
  //     .catch((error) => console.error(error))
  // }

  // useEffect(() => {
  //   getCombatant()
  // }, [])

  // const getSuperHero = () => {
  //   axios.get('https://akabab.github.io/superhero-api/api/all.json')
  //     .then(
  //       (response) => setSuperHero(response.data),
  //       (err) => console.error(err)
  //     )
  //     .catch((error) => console.error(error))
  // }

  // useEffect(() => {
  //   getSuperHero()
  // }, [])

  const getPlayer1 = () => {

    axios.get('https://akabab.github.io/superhero-api/api/id/69.json')
      .then((response) => setPlayer1(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    getPlayer1()
  }, [])

  


  let truefalse = () => {
    if (hide === 'false') {
      setHide('true')
    }
    if (hide === 'true') {
      setHide('false')
    }
  }



  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          <a href="#" onClick={truefalse}>List of Heros</a>
        </div>
      </div>
      
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
