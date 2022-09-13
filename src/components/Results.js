import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Results = (props) => {

console.log(props.results)


  return (
      <>
        <div className='cardContainer'>
      {props.results.map((result) => {
        return (
              <div className='resultCard' key={result.id}>
                <h2>{result.name}</h2>
                <p><b>Real Name: </b>{result.biography['full-name']}</p>
                <h4>Stats: </h4>
                <ul>
                  <li>Intellegence: {result.powerstats.intelligence}</li>
                  <li>Strength: {result.powerstats.strength}</li>
                  <li>Speed: {result.powerstats.speed}</li>
                  <li>Durability: {result.powerstats.durability}</li>
                  <li>Power: {result.powerstats.power}</li>
                  <li>Combat: {result.powerstats.combat}</li>
                </ul>
                <button onClick={props.updatePlayer1}>Add to player 1</button>
                <button onClick={props.updatePlayer2}>Add to player 2</button>
              </div>

          )
      })}
      </div>





      {props.show ?
        <div className= 'searchCard'>
          <h3>{props.results.name}</h3>
          <img src={props.results.image.url} alt={props.results.name}/>
          <h4>Stats: </h4>
          <ul>
            <li>Intellegence: {props.results.powerstats.intelligence}</li>
            <li>Strength: {props.results.powerstats.strength}</li>
            <li>Speed: {props.results.powerstats.speed}</li>
            <li>Durability: {props.results.powerstats.durability}</li>
            <li>Power: {props.results.powerstats.power}</li>
            <li>Combat: {props.results.powerstats.combat}</li>
          </ul>
          <button onClick={props.updatePlayer1}>Add to player 1</button>
          <button onClick={props.updatePlayer2}>Add to player 2</button>
        </div>
        :
        <p></p> }

      </>

  )
}

export default Results
