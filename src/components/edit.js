import React, { useState, useEffect } from 'react'

const Edit = (props) => {
  const [image, setImage] = useState({...props.image})

  const handleChange = (event) => {
    setImage({ ...image, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(image)
  }
  
  return (
    <>
    <details>
        <summary>Edit Character</summary>
        <form onSubmit={handleSubmit}>
        <label htmlFor="nameOfStage">Name: </label>
        <input type="text" name="nameOfStage" value={image.nameOfStage} onChange={handleChange} />
        <br />
        <input type="submit"/>
      </form>
      </details>
    </>
  )
}

export default Edit
