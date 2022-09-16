import React, { useState } from 'react'

const Result_card = (props) => {

  //-----------------------------------------------
  //  UPDATE PLAYERS
  //-----------------------------------------------
  const updatePlayer1 = () => {
    props.setPlayer1({
      name: props.result.name,
      realName: props.result.biography['full-name'],
      species: props.result.appearance.race,
      intellegence: Number(props.result.powerstats.intelligence),
      strength: Number(props.result.powerstats.strength),
      speed: Number(props.result.powerstats.speed),
      durability: Number(props.result.powerstats.durability),
      power: Number(props.result.powerstats.power),
      image: props.result.image.url
    })
  }
  const updatePlayer2 = () => {
    props.setPlayer2({
      name: props.result.name,
      realName: props.result.biography['full-name'],
      species: props.result.appearance.race,
      intellegence: Number(props.result.powerstats.intelligence),
      strength: Number(props.result.powerstats.strength),
      speed: Number(props.result.powerstats.speed),
      durability: Number(props.result.powerstats.durability),
      power: Number(props.result.powerstats.power),
      image: props.result.image.url
    })
  }


  return (
    <>
    <div className='resultCard' key={props.result.id}>

      <div className='cardHead'>
        <h2>{props.result.name}</h2>
        <p><b>Real Name: </b>{props.result.biography['full-name']}</p>
        <p><b>Species: </b>{props.result.appearance.race}</p>
      </div>
      <div className='cardBody'>
      <img className='cardImg' src={props.result.image.url} alt={props.result.name}/>
        <div className='stats'>
          <h4>Stats: </h4>
          <ul>
            <li>Intellegence: {props.result.powerstats.intelligence}</li>
            <li>Strength: {props.result.powerstats.strength}</li>
            <li>Speed: {props.result.powerstats.speed}</li>
            <li>Durability: {props.result.powerstats.durability}</li>
            <li>Power: {props.result.powerstats.power}</li>
          </ul>
        </div>
      </div>
      <div className='cardButtons'>
        <button onClick={updatePlayer1}>Add to player 1</button>
        <button onClick={updatePlayer2}>Add to player 2</button>
      </div>
    </div>
    </>
  )
}

export default Result_card
