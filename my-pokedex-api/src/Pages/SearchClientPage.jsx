import React from 'react'
import { Link } from 'react-router-dom'
import {Box, Heading, Text, Button, Container, ButtonGroup} from '@chakra-ui/react'
import styled from 'styled-components'



export function SearchClientPage() {
  return (
    <Container>
  <Heading bg="whitesmoke" marginTop={'500px'} p={4} m={'40px auto'}>
    BUSCA FILTRADA!
    </Heading>
    <Text fontSize='xl'>
    Paystack helps businesses in Africa get paid by anyone, anywhere in the
    world
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
