import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Box, Heading, Text, Button, Container, ButtonGroup} from '@chakra-ui/react'
import styled from 'styled-components'



export function SearchPage() {
  return (
    <Container>
<Box maxW='90vw' m='10px auto' pb={'50px'}>
  <Heading bg="whitesmoke" p={4} m={'40px auto'}>Modern online and offline payments for Africa</Heading>
  <Text fontSize='xl'>
    Paystack helps businesses in Africa get paid by anyone, anywhere in the
    world
  </Text>
  <ButtonGroup w={'100%'}>
  <Button size='md' colorScheme='blue' mt='24px'>
    BUSCA ESPECIFICA
  </Button>
  <Link to={'/pokemons/'}>
  BuscarPokemons
</Link>
  </ButtonGroup>
</Box>
</Container>
  )
}
