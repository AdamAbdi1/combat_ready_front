import React, { useState, useEffect } from 'react'


const Add = (props) => {
  let emptyImage = { nameOfStage: '',}
  const [image, setImage] = useState(emptyImage)

  const handleChange = (event) => {
    setImage({ ...image, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(image)
    setImage(emptyImage)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameOfStage">Image Url: </label>
        <input type="text" name="nameOfStage" value={image.nameOfStage} onChange={handleChange} />
        <br />
        <input type="submit"/>
      </form>
    </>
  )
}

export default Add
