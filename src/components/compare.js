import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Compare = (props) => {

    return (
        <>
        <h1>hi</h1>
        <h1>{props.player1.name}</h1>
            <h4>Power Stats</h4>
            <h6>intelligence: {props.player1.powerstats.intelligence}</h6>
            <h6>strength: {props.player1.powerstats.strength}</h6>
            <h6>speed: {props.player1.powerstats.speed}</h6>
            <h6>durability: {props.player1.powerstats.durability}</h6>
            <h6>power: {props.player1.powerstats.power}</h6>
            <h6>combat: {props.player1.powerstats.combat}</h6>
        </>

    )
}

export default Compare