import React from 'react'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { PokeDetails } from '../components/PokeDetails'
import { Button, ButtonGroup } from '@chakra-ui/react'
const Button2 = styled.button`
position: fixed;
z-index:11;
top: 20px;
left: 55%;
background: #f2fffd;
height:40px;
padding: 0.2rem 1rem;
border: 3px solid black;
border-radius: 14px;
`

const Button3 = styled.button`
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
export function Details(){
  navigate = Navigate()
  return (
  

<div>
  <Button as={'button'} onClick={navigate=('/pokedex/0')}>
  MyPokeDex </Button>

   <PokeDetails/>
   </div> 

  )
}

