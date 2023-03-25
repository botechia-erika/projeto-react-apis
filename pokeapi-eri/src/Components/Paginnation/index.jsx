import React from 'react'
import { Button, ButtonGroup, WrapItem, Box } from '@chakra-ui/react'
const Total = 6
export function Paginnation(){ 
  return (
    <ButtonGroup>

    <WrapItem>
      <Button colorScheme='red' shadow={`var(--shadow-ArrowBtn)`}> 
      Anterior
       </Button>
    </WrapItem>
    <WrapItem>
      <Box bg='var(--white-default)' width={'7rem'} height={'2.3rem'} shadow={`var(--shadow-ArrowBtn)`}
      textAlign={'center'} padding={'1.4'}
      >
      <p>

      </p>
      </Box>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='green' shadow={`var(--shadow-ArrowBtn)`}> Proxima </Button>
    </WrapItem>

    </ButtonGroup>
  )
}
