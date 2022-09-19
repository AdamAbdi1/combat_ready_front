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
        <>
          <div className='matchMenu'>
          <a onClick={() => handleRenderMatch(match)}>{match.matchName}</a>
          <button onClick={props.handleDelete} value={match.id}>X</button>
          </div>

        </>
      )
    })}
    </>
  )
}

export default Matches
