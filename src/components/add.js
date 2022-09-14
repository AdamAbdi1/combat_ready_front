import React, { useState, useEffect } from 'react'


const Add = (props) => {
  let emptyCharacter = { name: '', intelligence: '', strength: '', speed: '', durability: '', power: '', combat: ''}
  const [Character, setCharacter] = useState(emptyCharacter)

  const handleChange = (event) => {
    setCharacter({ ...Character, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(Character)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={Character.name} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="intelligence">intelligence: </label>
        <input type="number" name="intelligence" value={Character.intelligence} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="strength">strength: </label>
        <input type="number" name="strength" value={Character.strength} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="speed">speed: </label>
        <input type="number" name="speed" value={Character.speed} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="durability">Durability: </label>
        <input type="number" name="durability" value={Character.durability} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="power">power: </label>
        <input type="number" name="power" value={Character.power} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="comabt">combat: </label>
        <input type="text" name="combat" value={Character.combat} onChange={handleChange} /><br/>
        <input type="submit"/>
      </form>
    </>
  )
}

export default Add
