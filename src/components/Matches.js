import React, { useState } from 'react'
import axios from 'axios'

const Matches = (props) => {


  return (
    <>
    {props.matches.map((match) => {
      return (
        <p>{match.matchName}</p>
      )
    })}
    </>
  )
}

export default Matches
