import React from 'React'
import styled from "styled-components"
import { Link, Navigate, useNavigate} from "react-router-dom"
import {Button } from '@chakra-ui/react'

import { DivFlip } from "./styled"
export const Pokeflip = () => {
    const imgDefault ="https://live.staticflickr.com/65535/51937488067_0f7029922f_o.png" 
    const [listTypes, setListTypes] = useState([])
    const [InfoPokemon, setInfoPokemon] = useState([])
    
    const getInfoPokemon = ()=>{
        const infoModelo = {name: pokemon.data.name, id: pokemon.data.id, types: [], colorType: ""}
        setInfoPokemon([...infoPokemon.push({...infoModelo, types: listTypes, colorType: listTypes[0].toUpperCase()})])
    }




    return (


<>
<DivFlip className="card-flip">

  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={pokemon.data.sprites.other['dream_world']['front_default']} alt="Avatar" />
    </div>
    <div className="flip-card-back">
      <h1>{pokemon.data.name}</h1> 
      <button
              onClick={()=> addToPokedex(pokemon)}
             >
             Capturar
            </button>
            <Button
              flex={1}
              color={'black'}
              bg={'yellow.400'}
              fontSize={'md'}
              rounded={'full'}
              _focus={{
                bg: 'yellow.200',
              }}>
          <Link to={'/pokemon/' + pokemon.data.name}
              color={'black'}
                dataPokemon = {pokemon}
              >
            +INFO
      
        </Link>
      <Link to="/pokedex"> MyPokedex </Link>
    </div>
  </div>

    </DivFlip>
    </>


)
}