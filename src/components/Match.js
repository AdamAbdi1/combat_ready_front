import React, { useState } from 'react'


const Match = (props) => {
  const [edit, setEdit] = useState(false)
  const [matchEdit, setMatchEdit] = useState({...props.selMatch})


  return (
    <>
    {edit ?
      <>
    <button onClick={() => props.setShowMatch(false)}>Close Match</button>
    <button onClick={() => setEdit(false)}>Cancel Edit</button>
      <div className='mainContainer edit'>
      <h2>{props.selMatch.matchName}</h2>
        <form className='cardContainer'>
          <div className='resultCard'>
            <div className='cardHead'>
              <h3>{props.selMatch.nameP1}</h3>
              <p><b>Real Name: </b>{props.selMatch.realNameP1}</p>
              <p><b>Species: </b>{props.selMatch.speciesP1}</p>
            </div>
            <div className='cardBody'>
              <img className='cardImg' src={props.selMatch.imageP1} alt={props.selMatch.nameP1}/>
              <div className='stats'>
                <h4>Stats: </h4>
                <ul>
                  <li>Intellegence: {props.selMatch.intelligenceP1}</li>
                  <li>Strength: {props.selMatch.strengthP1}</li>
                  <li>Speed: {props.selMatch.speedP1}</li>
                  <li>Durability: {props.selMatch.durabilityP1}</li>
                  <li>Power: {props.selMatch.powerP1}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='resultCard'>
            <div className='cardHead'>
              <h3>{props.selMatch.nameP2}</h3>
              <p><b>Real Name: </b>{props.selMatch.realNameP2}</p>
              <p><b>Species: </b>{props.selMatch.speciesP2}</p>
            </div>
            <div className='cardBody'>
              <img className='cardImg' src={props.selMatch.imageP2} alt={props.selMatch.nameP2}/>
              <div className='stats'>
                <h4>Stats: </h4>
                <ul>
                  <li>Intellegence: {props.selMatch.intelligenceP2}</li>
                  <li>Strength: {props.selMatch.strengthP2}</li>
                  <li>Speed: {props.selMatch.speedP2}</li>
                  <li>Durability: {props.selMatch.durabilityP2}</li>
                  <li>Power: {props.selMatch.powerP2}</li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </div>
      </>
      :
<>

    <button onClick={() => props.setShowMatch(false)}>Close Match</button>
    <button onClick={() => setEdit(true)}>Edit Match</button>
    <div className='mainContainer'>
    <h2>{props.selMatch.matchName}</h2>
      <div className='cardContainer'>
        <div className='resultCard'>
          <div className='cardHead'>
            <h3>{props.selMatch.nameP1}</h3>
            <p><b>Real Name: </b>{props.selMatch.realNameP1}</p>
            <p><b>Species: </b>{props.selMatch.speciesP1}</p>
          </div>
          <div className='cardBody'>
            <img className='cardImg' src={props.selMatch.imageP1} alt={props.selMatch.nameP1}/>
            <div className='stats'>
              <h4>Stats: </h4>
              <ul>
                <li>Intellegence: {props.selMatch.intelligenceP1}</li>
                <li>Strength: {props.selMatch.strengthP1}</li>
                <li>Speed: {props.selMatch.speedP1}</li>
                <li>Durability: {props.selMatch.durabilityP1}</li>
                <li>Power: {props.selMatch.powerP1}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='resultCard'>
          <div className='cardHead'>
            <h3>{props.selMatch.nameP2}</h3>
            <p><b>Real Name: </b>{props.selMatch.realNameP2}</p>
            <p><b>Species: </b>{props.selMatch.speciesP2}</p>
          </div>
          <div className='cardBody'>
            <img className='cardImg' src={props.selMatch.imageP2} alt={props.selMatch.nameP2}/>
            <div className='stats'>
              <h4>Stats: </h4>
              <ul>
                <li>Intellegence: {props.selMatch.intelligenceP2}</li>
                <li>Strength: {props.selMatch.strengthP2}</li>
                <li>Speed: {props.selMatch.speedP2}</li>
                <li>Durability: {props.selMatch.durabilityP2}</li>
                <li>Power: {props.selMatch.powerP2}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>

    }

    </>
  )
}

export default Match
