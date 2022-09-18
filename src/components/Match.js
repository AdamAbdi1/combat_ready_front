import React, { useState } from 'react'


const Match = (props) => {
  const [edit, setEdit] = useState(false)
  let emptyMatch = {
    matchName: '',
    nameP1: '',
    realNameP1: '',
    speciesP1: '',
    intellegenceP1: 0,
    strengthP1: 0,
    speedP1: 0,
    durabilityP1: 0,
    powerP1: 0,
    imageP1: '',
    nameP2: '',
    realNameP2: '',
    speciesP2: '',
    intellegenceP2: 0,
    strengthP2: 0,
    speedP2: 0,
    durabilityP2: 0,
    powerP2: 0,
    imageP2: ''
  }
  const [matchEdit, setMatchEdit] = useState(emptyMatch)

  const handleUpdateEdit = (event) => {
    setMatchEdit({...matchEdit, [event.target.matchName]: event.target.value})
  }


  return (
    <>
    {edit ?
      <>
    <button onClick={() => props.setShowMatch(false)}>Close Match</button>
    <button onClick={() => setEdit(false)}>Cancel Edit</button>
    <button onClick={props.handleDelete} value={props.selMatch.id}>Delete</button>
      <form className='mainContainer edit'>
      <label htmlFor='matchName'>Match Name: </label>
      <input type='text' name='matchName' placeHolder={props.selMatch.matchName} onChange={handleUpdateEdit}/>
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
      </form>
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
                {props.selMatch.intelligenceP1 > props.selMatch.intelligenceP2 ?
                  <li>Intellegence: {props.selMatch.intelligenceP1} <b className='greenText'>(+{Math.abs(props.selMatch.intelligenceP1 -props.selMatch.intelligenceP2)})</b> </li>
                  : <li>Intellegence: {props.selMatch.intelligenceP1} <b className='redText'>(-{Math.abs(props.selMatch.intelligenceP1 -props.selMatch.intelligenceP2)})</b> </li>}
                {props.selMatch.strengthP1 > props.selMatch.strengthP2 ?
                  <li>Strength: {props.selMatch.strengthP1} <b className='greenText'>(+{Math.abs(props.selMatch.strengthP1 -props.selMatch.strengthP2)})</b> </li>
                  : <li>Strength: {props.selMatch.strengthP1} <b className='redText'>(-{Math.abs(props.selMatch.strengthP1 -props.selMatch.strengthP2)})</b> </li>}
                {props.selMatch.speedP1 > props.selMatch.speedP2 ?
                  <li>Speed: {props.selMatch.speedP1} <b className='greenText'>(+{Math.abs(props.selMatch.speedP1 -props.selMatch.speedP2)})</b> </li>
                  : <li>Speed: {props.selMatch.speedP1} <b className='redText'>(-{Math.abs(props.selMatch.speedP1 -props.selMatch.speedP2)})</b> </li>}
                {props.selMatch.speedP1 > props.selMatch.speedP2 ?
                  <li>Durability: {props.selMatch.durabilityP1} <b className='greenText'>(+{Math.abs(props.selMatch.durabilityP1 -props.selMatch.durabilityP2)})</b> </li>
                  : <li>Durability: {props.selMatch.durabilityP1} <b className='redText'>(-{Math.abs(props.selMatch.durabilityP1 -props.selMatch.durabilityP2)})</b> </li>}
                {props.selMatch.powerP1 > props.selMatch.powerP2 ?
                  <li>Power: {props.selMatch.powerP1} <b className='greenText'>(+{Math.abs(props.selMatch.powerP1 -props.selMatch.powerP2)})</b> </li>
                  : <li>Power: {props.selMatch.powerP1} <b className='redText'>(-{Math.abs(props.selMatch.powerP1 -props.selMatch.powerP2)})</b> </li>}
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
                {props.selMatch.intelligenceP1 < props.selMatch.intelligenceP2 ?
                  <li>Intellegence: {props.selMatch.intelligenceP2} <b className='greenText'>(+{Math.abs(props.selMatch.intelligenceP1 -props.selMatch.intelligenceP2)})</b> </li>
                  : <li> Intellegence: {props.selMatch.intelligenceP2} <b className='redText'>(-{Math.abs(props.selMatch.intelligenceP1 -props.selMatch.intelligenceP2)})</b></li>  }
                {props.selMatch.strengthP1 < props.selMatch.strengthP2 ?
                  <li>Strength: {props.selMatch.strengthP2} <b className='greenText'>(+{Math.abs(props.selMatch.strengthP1 -props.selMatch.strengthP2)})</b> </li>
                  : <li>Strength: {props.selMatch.strengthP2} <b className='redText'>(-{Math.abs(props.selMatch.strengthP1 -props.selMatch.strengthP2)})</b> </li>}
                {props.selMatch.speedP1 < props.selMatch.speedP2 ?
                  <li>Speed: {props.selMatch.speedP2} <b className='greenText'>(+{Math.abs(props.selMatch.speedP1 -props.selMatch.speedP2)})</b> </li>
                  : <li>Speed: {props.selMatch.speedP2} <b className='redText'>(-{Math.abs(props.selMatch.speedP1 -props.selMatch.speedP2)})</b> </li>}
                {props.selMatch.speedP1 < props.selMatch.speedP2 ?
                  <li>Durability: {props.selMatch.durabilityP2} <b className='greenText'>(+{Math.abs(props.selMatch.durabilityP1 -props.selMatch.durabilityP2)})</b> </li>
                  : <li>Durability: {props.selMatch.durabilityP2} <b className='redText'>(-{Math.abs(props.selMatch.durabilityP1 -props.selMatch.durabilityP2)})</b> </li>}
                {props.selMatch.powerP1 < props.selMatch.powerP2 ?
                  <li>Power: {props.selMatch.powerP2} <b className='greenText'>(+{Math.abs(props.selMatch.powerP1 -props.selMatch.powerP2)})</b> </li>
                  : <li>Power: {props.selMatch.powerP2} <b className='redText'>(-{Math.abs(props.selMatch.powerP1 -props.selMatch.powerP2)})</b> </li>}
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

// {props.selMatch.intelligenceP1 > props.selMatch.intelligenceP2 ? : }
