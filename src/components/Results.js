import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Results = (props) => {
  let [results, setResults] = useState(props.results)
  let [player1, setPlayer1] = useState({})
  let [player2, setPlayer2] = useState({})
  //-----------------------------------------------
  //  UPDATE PLAYERS
  //-----------------------------------------------

  const updatePlayer1 = () => {
    console.log('p1' + results)
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
  return (
      <>
      {props.results === undefined ?
        <h2>Sorry, {props.search} does not appear to be in our data base.</h2>
        :
        <div className='cardContainer'>
        {props.results.map((result) => {
          return (
                <div className='resultCard' key={result.id}>
                  <div className='cardHead'>
                    <h2>{result.name}</h2>
                    <p><b>Real Name: </b>{result.biography['full-name']}</p>
                    <p><b>Species: </b>{result.appearance.race}</p>
                  </div>
                  <div className='cardBody'>
                  <img className='cardImg' src={result.image.url} alt={result.name}/>
                    <div className='stats'>
                      <h4>Stats: </h4>
                      <ul>
                        <li>Intellegence: {result.powerstats.intelligence}</li>
                        <li>Strength: {result.powerstats.strength}</li>
                        <li>Speed: {result.powerstats.speed}</li>
                        <li>Durability: {result.powerstats.durability}</li>
                        <li>Power: {result.powerstats.power}</li>
                        <li>Combat: {result.powerstats.combat}</li>
                      </ul>
                    </div>
                  </div>
                  <div className='cardButtons'>
                    <button onClick={updatePlayer1}>Add to player 1</button>
                    <button onClick={updatePlayer2}>Add to player 2</button>
                  </div>
                </div>

            )
        })}
        </div> }







      </>

  )
}

export default Results
