import React from 'react'
import {Heading, Text, Box, Flex} from '@chakra-ui/react'
import { Hero } from '../components/Hero'

export function LandingPage(){
  return (
    
    <Flex h={'100vh'} w={'100%'} flexFlow={'row wrap'}><Box maxW={'100%'}s m='10px auto' pb={'50px'}>
    <Text fontSize='xl'>
  
    </Text>  
    </Box>
    <Box w={'100%'}>  <Hero/>
</Box>
</Flex>
  )
}

