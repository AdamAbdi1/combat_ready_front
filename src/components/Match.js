import React, { useState } from 'react'


const Match = (props) => {
  const [edit, setEdit] = useState(false)
  let emptyMatch = {
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
  }
  const [matchEdit, setMatchEdit] = useState(props.selMatch)

  const handleUpdateEdit = (event) => {
    setMatchEdit({...matchEdit, [event.target.name]: event.target.value})
  }
  const handleCloseMatch = () => {
    setEdit(false)
    setMatchEdit(props.selMatch)
  }
  const handleCancelEdit = () => {
    setEdit(false)
    setMatchEdit(props.selMatch)
  }

  return (
    <>
    {edit ?
      <>
    <button onClick={() => handleCloseMatch()}>Close Match</button>
    <button onClick={() => handleCancelEdit()}>Cancel Edit</button>
    <button onClick={() => props.handleUpdateMatch(matchEdit)} value={matchEdit.id}>Update Match</button>
    <button onClick={props.handleDelete} >Delete Match</button>
      <form className='mainContainer edit' id='matchEditForm'>
      <label htmlFor='matchName'>Match Name: </label>
      <input type='text' name='matchName' placeHolder={props.selMatch.matchName} onChange={handleUpdateEdit}/>
        <div className='cardContainer'>
          <div className='resultCard'>
            <div className='cardHead'>
              <label htmlFor='nameP1'>Player 1 Name: </label>
              <input type='text' name='nameP1' placeHolder={props.selMatch.nameP1} onChange={handleUpdateEdit}/><br/>
              <label htmlFor='realNameP1'>Real Name: </label>
              <input type='text' name='realNameP1' placeHolder={props.selMatch.realNameP1} onChange={handleUpdateEdit}/><br/>
              <label htmlFor='speciesP1'>Species: </label>
              <input type='text' name='speciesP1' placeHolder={props.selMatch.speciesP1} onChange={handleUpdateEdit}/><br/>
            </div>
            <div className='cardBody'>
              <img className='cardImg' src={props.selMatch.imageP1} alt={props.selMatch.nameP1}/>
              <div className='stats'>
                <h4>Stats: </h4>
                <ul>
                  <label htmlFor='intelligenceP1'>Intelligence: </label>
                  <input type='number' name='intelligenceP1' placeHolder={props.selMatch.intelligenceP1} onChange={handleUpdateEdit}/><br/>
                  <label htmlFor='strengthP1'>Strength: </label>
                  <input type='number' name='strengthP1' placeHolder={props.selMatch.strengthP1} onChange={handleUpdateEdit}/><br/>
                  <label htmlFor='speedP1'>Speed: </label>
                  <input type='number' name='speedP1' placeHolder={props.selMatch.speedP1} onChange={handleUpdateEdit}/><br/>
                  <label htmlFor='durabilityP1'>Durability: </label>
                  <input type='number' name='durabilityP1' placeHolder={props.selMatch.durabilityP1} onChange={handleUpdateEdit}/><br/>
                  <label htmlFor='powerP1'>Power: </label>
                  <input type='number' name='powerP1' placeHolder={props.selMatch.powerP1} onChange={handleUpdateEdit}/><br/>
                </ul>
              </div>
            </div>
          </div>
          <div className='resultCard'>
            <div className='cardHead'>
              <label htmlFor='nameP1'>Player 2 Name: </label>
              <input type='text' name='nameP2' placeHolder={props.selMatch.nameP2} onChange={handleUpdateEdit}/><br/>
              <label htmlFor='realNameP2'>Real Name: </label>
              <input type='text' name='realNameP2' placeHolder={props.selMatch.realNameP2} onChange={handleUpdateEdit}/><br/>
              <label htmlFor='speciesP2'>Species: </label>
              <input type='text' name='speciesP2' placeHolder={props.selMatch.speciesP2} onChange={handleUpdateEdit}/><br/>
            </div>
            <div className='cardBody'>
              <img className='cardImg' src={props.selMatch.imageP2} alt={props.selMatch.nameP2}/>
              <div className='stats'>
                <h4>Stats: </h4>
                <ul>
                  <label htmlFor='intelligenceP2'>Intelligence: </label>
                  <input type='number' name='intelligenceP2' placeHolder={props.selMatch.intelligenceP2} onChange={handleUpdateEdit}/><br/>
                  <label htmlFor='strengthP2'>Strength: </label>
                  <input type='number' name='strengthP2' placeHolder={props.selMatch.strengthP2} onChange={handleUpdateEdit}/><br/>
                  <label htmlFor='speedP2'>Speed: </label>
                  <input type='number' name='speedP2' placeHolder={props.selMatch.speedP2} onChange={handleUpdateEdit}/><br/>
                  <label htmlFor='durabilityP2'>Durability: </label>
                  <input type='number' name='durabilityP2' placeHolder={props.selMatch.durabilityP2} onChange={handleUpdateEdit}/><br/>
                  <label htmlFor='powerP2'>Power: </label>
                  <input type='number' name='powerP2' placeHolder={props.selMatch.powerP2} onChange={handleUpdateEdit}/><br/>
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
                {Number(props.selMatch.intelligenceP1) === Number(props.selMatch.intelligenceP2) ? <li>Intelligence: {props.selMatch.intelligenceP1} <b className='evenText'>(Even Steven)</b></li> : Number(props.selMatch.intelligenceP1) > Number(props.selMatch.intelligenceP2) ?
                  <li>Intelligence: {props.selMatch.intelligenceP1} <b className='greenText'>(+{Math.abs(props.selMatch.intelligenceP1 -props.selMatch.intelligenceP2)})</b> </li>
                  : <li>Intelligence: {props.selMatch.intelligenceP1} <b className='redText'>(-{Math.abs(props.selMatch.intelligenceP1 -props.selMatch.intelligenceP2)})</b> </li> }
                {Number(props.selMatch.strengthP1) === Number(props.selMatch.strengthP2) ? <li>Strength: {props.selMatch.strengthP1} <b className='evenText'>(Even Steven)</b></li> : Number(props.selMatch.strengthP1) > Number(props.selMatch.strengthP2) ?
                  <li>Strength: {props.selMatch.strengthP1} <b className='greenText'>(+{Math.abs(props.selMatch.strengthP1 -props.selMatch.strengthP2)})</b> </li>
                  : <li>Strength: {props.selMatch.strengthP1} <b className='redText'>(-{Math.abs(props.selMatch.strengthP1 -props.selMatch.strengthP2)})</b> </li> }
                {Number(props.selMatch.speedP1) === Number(props.selMatch.speedP2) ? <li>Speed: {props.selMatch.speedP1} <b className='evenText'>(Even Steven)</b></li> : Number(props.selMatch.speedP1) > Number(props.selMatch.speedP2) ?
                  <li>Speed: {props.selMatch.speedP1} <b className='greenText'>(+{Math.abs(props.selMatch.speedP1 -props.selMatch.speedP2)})</b> </li>
                  : <li>Speed: {props.selMatch.speedP1} <b className='redText'>(-{Math.abs(props.selMatch.speedP1 -props.selMatch.speedP2)})</b> </li> }
                {Number(props.selMatch.speedP1) === Number(props.selMatch.speedP2) ? <li>Speed: {props.selMatch.speedP1} <b className='evenText'>(Even Steven)</b></li> : Number(props.selMatch.speedP1) > Number(props.selMatch.speedP2) ?
                  <li>Speed: {props.selMatch.speedP1} <b className='greenText'>(+{Math.abs(props.selMatch.speedP1 -props.selMatch.speedP2)})</b> </li>
                  : <li>Speed: {props.selMatch.speedP1} <b className='redText'>(-{Math.abs(props.selMatch.speedP1 -props.selMatch.speedP2)})</b> </li> }
                {Number(props.selMatch.durabilityP1) === Number(props.selMatch.durabilityP2) ? <li>Durability: {props.selMatch.durabilityP1} <b className='evenText'>(Even Steven)</b></li> : Number(props.selMatch.durabilityP1) > Number(props.selMatch.durabilityP2) ?
                  <li>Durability: {props.selMatch.durabilityP1} <b className='greenText'>(+{Math.abs(props.selMatch.durabilityP1 -props.selMatch.durabilityP2)})</b> </li>
                  : <li>Durability: {props.selMatch.durabilityP1} <b className='redText'>(-{Math.abs(props.selMatch.durabilityP1 -props.selMatch.durabilityP2)})</b> </li> }
                {Number(props.selMatch.powerP1) === Number(props.selMatch.powerP2) ? <li>Power: {props.selMatch.powerP1} <b className='evenText'>(Even Steven)</b></li> : Number(props.selMatch.powerP1) > Number(props.selMatch.powerP2) ?
                  <li>Power: {props.selMatch.powerP1} <b className='greenText'>(+{Math.abs(props.selMatch.powerP1 -props.selMatch.powerP2)})</b> </li>
                  : <li>Power: {props.selMatch.powerP1} <b className='redText'>(-{Math.abs(props.selMatch.powerP1 -props.selMatch.powerP2)})</b> </li> }
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
                {Number(props.selMatch.intelligenceP1) === Number(props.selMatch.intelligenceP2) ? <li>Intelligence: {props.selMatch.intelligenceP1} <b className='evenText'>(Even Steven)</b></li> : Number(props.selMatch.intelligenceP1) < Number(props.selMatch.intelligenceP2) ?
                  <li>Intelligence: {props.selMatch.intelligenceP1} <b className='greenText'>(+{Math.abs(props.selMatch.intelligenceP1 -props.selMatch.intelligenceP2)})</b> </li>
                  : <li>Intelligence: {props.selMatch.intelligenceP1} <b className='redText'>(-{Math.abs(props.selMatch.intelligenceP1 -props.selMatch.intelligenceP2)})</b> </li> }
                {Number(props.selMatch.strengthP1) === Number(props.selMatch.strengthP2) ? <li>Strength: {props.selMatch.strengthP1} <b className='evenText'>(Even Steven)</b></li> : Number(props.selMatch.strengthP1) < Number(props.selMatch.strengthP2) ?
                  <li>Strength: {props.selMatch.strengthP1} <b className='greenText'>(+{Math.abs(props.selMatch.strengthP1 -props.selMatch.strengthP2)})</b> </li>
                  : <li>Strength: {props.selMatch.strengthP1} <b className='redText'>(-{Math.abs(props.selMatch.strengthP1 -props.selMatch.strengthP2)})</b> </li> }
                {Number(props.selMatch.speedP1) === Number(props.selMatch.speedP2) ? <li>Speed: {props.selMatch.speedP1} <b className='evenText'>(Even Steven)</b></li> : Number(props.selMatch.speedP1) < Number(props.selMatch.speedP2) ?
                  <li>Speed: {props.selMatch.speedP1} <b className='greenText'>(+{Math.abs(props.selMatch.speedP1 -props.selMatch.speedP2)})</b> </li>
                  : <li>Speed: {props.selMatch.speedP1} <b className='redText'>(-{Math.abs(props.selMatch.speedP1 -props.selMatch.speedP2)})</b> </li> }
                {Number(props.selMatch.speedP1) === Number(props.selMatch.speedP2) ? <li>Speed: {props.selMatch.speedP1} <b className='evenText'>(Even Steven)</b></li> : Number(props.selMatch.speedP1) < Number(props.selMatch.speedP2) ?
                  <li>Speed: {props.selMatch.speedP1} <b className='greenText'>(+{Math.abs(props.selMatch.speedP1 -props.selMatch.speedP2)})</b> </li>
                  : <li>Speed: {props.selMatch.speedP1} <b className='redText'>(-{Math.abs(props.selMatch.speedP1 -props.selMatch.speedP2)})</b> </li> }
                {Number(props.selMatch.durabilityP1) === Number(props.selMatch.durabilityP2) ? <li>Durability: {props.selMatch.durabilityP1} <b className='evenText'>(Even Steven)</b></li> : Number(props.selMatch.durabilityP1) < Number(props.selMatch.durabilityP2) ?
                  <li>Durability: {props.selMatch.durabilityP1} <b className='greenText'>(+{Math.abs(props.selMatch.durabilityP1 -props.selMatch.durabilityP2)})</b> </li>
                  : <li>Durability: {props.selMatch.durabilityP1} <b className='redText'>(-{Math.abs(props.selMatch.durabilityP1 -props.selMatch.durabilityP2)})</b> </li> }
                {Number(props.selMatch.powerP1) === Number(props.selMatch.powerP2) ? <li>Power: {props.selMatch.powerP1} <b className='evenText'>(Even Steven)</b></li> : Number(props.selMatch.powerP1) < Number(props.selMatch.powerP2) ?
                  <li>Power: {props.selMatch.powerP1} <b className='greenText'>(+{Math.abs(props.selMatch.powerP1 -props.selMatch.powerP2)})</b> </li>
                  : <li>Power: {props.selMatch.powerP1} <b className='redText'>(-{Math.abs(props.selMatch.powerP1 -props.selMatch.powerP2)})</b> </li> }
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
