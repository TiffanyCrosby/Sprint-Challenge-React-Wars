import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';
import { Row } from 'reactstrap';
// import styled from 'styled-components';


const Character = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
            .then((response) => {
                console.log('This is the response data: ', response.data)
                setCharacters(response.data.results)
            })
            .catch((error) => {
                return (`Data NOT returned: ${error}`)
            })
    }, [])


    return (
        <div>
            <Row>
                {characters.map(character => {
                    return (
                        <Cards name={character.name} height={character.height} weight={character.mass} />
                    );
                })}
            </Row>
        </div>
    )
}

export default Character;