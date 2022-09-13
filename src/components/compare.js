import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Compare = () => {

    let [player1, setPlayer1] = useState([])
    
    let [player2, setPlayer2] = useState([])

    const getPlayer1 = () => {

        axios.get('https://www.superheroapi.com/api.php/104417709088771/search/batman')
            .then((response) => setPlayer1(response.data.results[0]),
                (err) => console.error(err)
            )
            .catch((error) => console.error(error))
    }

    useEffect(() => {
        getPlayer1()
    }, [])

    const check = () => {
        console.log(player1.powerstats.intelligence)
    }


    const getPlayer2 = () => {
        axios.get('https://www.superheroapi.com/api.php/104417709088771/search/A-Bomb')
            .then((response) => setPlayer2(response.data.results[0]),
                (err) => console.error(err)
            )
            .catch((error) => console.error(error))
    }

    useEffect(() => {
        getPlayer2()
    }, [])
    return (
        <>
            <button onClick={check} type='button'>sdkfl</button>
            <img src={player1.images.urls} />
            <h1>{player1.name}</h1>
            <h4>Power Stats</h4>
            <h6>{player1.powerstats.intelligence}</h6>
            <ul>
                <li>intelligence: {player1.powerstats}</li>
                <li>strength: {player1.powerstats.strength}</li>
                <li>speed: {player1.powerstats.speed}</li>
                <li>durability: {player1.powerstats.durability}</li>
                <li>power: {player1.powerstats.power}</li>
                <li>combat: {player1.powerstats.combat}</li>
            </ul>
            {/* <img src={player2.images.url} /> */}
            <h1>{player2.name}</h1>
            <ul>
                {/* <li>intelligence: {player2.powerstats.intelligence}</li>
                <li>strength: {player2.powerstats.strength}</li>
                <li>speed: {player2.powerstats.speed}</li>
                <li>durability: {player2.powerstats.durability}</li>
                <li>power: {player2.powerstats.power}</li>
                <li>combat: {player2.powerstats.combat}</li> */}
            </ul>
        </>

    )
}

export default Compare