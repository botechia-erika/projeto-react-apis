import React from 'react'
import { Link } from 'react-router-dom'
import {Box, Heading, Text, Button, Container, ButtonGroup} from '@chakra-ui/react'
import styled from 'styled-components'



export function Search() {
  return (
    <Container>
  <Heading bg="whitesmoke" p={4} m={'40px auto'}>
    BUSCA FILTRADA!
    </Heading>
    <Text fontSize='xl'>
  
  </Text>
  <Box>
  <Link to='/pokemons/0'>
  BuscarPokemons
</Link>

<Button to='/search/'>
  Enviar Busca
</Button>
</Box>

</Container>
  )
}
