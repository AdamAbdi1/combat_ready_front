import React, { useState } from 'react'


const Matches = (props) => {

  const handleRenderMatch = (match) => {
    props.setCompare(false)
    props.setShowMatch(true)
    props.setSelMatch(match)
  }

  return (
    <>
    {props.matches.map((match) => {
      return (
        <a onClick={() => handleRenderMatch(match)}>{match.matchName}</a>
      )
    })}
    </>
  )
}

export default Matches
