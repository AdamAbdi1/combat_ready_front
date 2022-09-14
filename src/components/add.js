import React, { useState, useEffect } from 'react'


const Add = (props) => {
  let emptyPerson = { name: '', age: '' }
  const [person, setPerson] = useState(emptyPerson)
  return (
    <>
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" />
        <br />
        <br />
        <label htmlFor="age">Age: </label>
        <input type="number" name="age" />
        <input type="submit"/>
      </form>
    </>
  )
}

export default Add
