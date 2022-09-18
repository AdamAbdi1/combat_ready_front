import React, { useState, useEffect } from 'react'

const Stage = (props) => {
  const [image, setImage] = useState({...props.image})

  const handleChange = (event) => {
    setImage({ ...image, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleChangeBackground(image)
  }
  
  return (
    <>
     <button onClick={handleSubmit}>change background</button>
    </>
  )
}

export default Stage