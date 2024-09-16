import React from 'react'
import { PokemonList } from '../components/PokemonList'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Button5 = styled.button`
position: fixed;
z-index:11;
top: 20px;
left:69%;
background: #f2fffd;
height:40px;
padding: 0.2rem 0.61rem;
border: 3px solid black;
border-radius: 14px;
`
export function List() {
  return (
    <div>
    <Button5>
      <Link to="/pokedex">
        MyPokeDex
      </Link>
    </Button5>
      <PokemonList/>
    </div>
  )
}

