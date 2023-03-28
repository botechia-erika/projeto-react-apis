import React from 'react'
import { PokemonList } from '../components/PokemonList'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Box, Heading, Text, Button, Container, ButtonGroup, Flex} from '@chakra-ui/react'

import {useEffect, useContext, useState} from "react"
import { PokedexContext } from './../globals/Context'
import { SearchPage } from './SearchPage'
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
   <Box bg="whitesmoke">
  <Heading bg="whitesmoke" p={4} m={'0px auto'} minH={'200px'}>PokeList! 1st generation</Heading>
  <Text fontSize='xl'>
   All 151 pokemons of first old time season !
  </Text>  
  <Button size='md' colorScheme='blue' mt='24px'>
    BUSCA ESPECIFICA
  </Button>
  </Box>
  <Flex maxW='90vw' m='10px auto' pb={'50px'}>

</Flex>
      <PokemonList/>
    </div>
  )
}

