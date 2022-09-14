import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Compare = (props) => {

    return (
        <>
        
        <h1>{props.results.name}</h1>
            <h4>Power Stats</h4>
            {/* <h6>intelligence: {props.results.powerstats}</h6>
            <h6>strength: {props.results.powerstats.strength}</h6>
            <h6>speed: {props.results.powerstats.speed}</h6>
            <h6>durability: {props.results.powerstats.durability}</h6>
            <h6>power: {props.results.powerstats.power}</h6>
            <h6>combat: {props.results.powerstats.combat}</h6> */}
        </>

    )
}

export default Compare