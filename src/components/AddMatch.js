import React, { useState } from 'react'
import axios from 'axios'

const AddMatch = (props) => {


  return (
    <button onClick={() => props.addMatch(props)} >Add Match</button>
  )
}

export default AddMatch
