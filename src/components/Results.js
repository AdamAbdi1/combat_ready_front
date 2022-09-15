import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Result_card from './Result_card'

const Results = (props) => {
  let [results, setResults] = useState(props.results)

  return (
    <>
    {props.results === undefined ?
      <h2>Sorry, {props.search} does not appear to be in our data base.</h2>
      :
      <div className='cardContainer'>
        {props.results.map((result) => {
          return (
            <Result_card key={result.id} result={result} setPlayer1={props.setPlayer1} setPlayer2={props.setPlayer2}/>
            )
        })}
      </div>
    }
    </>
  )
}

export default Results
