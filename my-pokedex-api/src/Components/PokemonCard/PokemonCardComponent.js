import React from 'react'
import React from 'react' 
import { PokedexContext } from './../../globals/Context'
import { Link, useParams, useNavigate } from "react-router-dom"
import { DivContainer } from "./../PokeItem/styled"
      import {
        Heading,
    WrapItem, 
        Box,
        Center,
        Image,
        Flex,
        Text,
        Stack,
        Button,
        useColorModeValue,
        Badge,
        Select,
        Container,
      } from '@chakra-ui/react';
      
const PokemonCardComponent = ({Pokemon, setPokemon}) => {
  return (

      
      <Center py={3}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '440px' }}
        height={{ sm: '100%', md: '220px' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} bg="  black" rounded='md'>
          <Image
            objectFit="contain"
            boxSize="100%"
            boxShadow='dark-lg' p='6' rounded='md'
         src={pokemon.data.sprites.other['dream_world']['front_default']} alt="pokemon img"
      
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          p={2}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}  color={'gray.900'}>
            {pokemon.data.name.toUpperCase()}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
           id National POKEDEX #{pokemon.data.id}
          </Text>
        
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          

<Badge
              px={3}
              py={1.5}
              color={'var(--white-default)'}
              bg={useColorModeValue(`var(--badge-${(item.type.name.toUpperCase())})`)}
              fontWeight={'700'}
              rounded='2xl'
              boxShadow={`var(--shadow-arrowBTN)`}
              >
            {item.type.name}
  </Badge> ))}
          </Stack>
      
          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
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
      
      
        </Button>
          </Stack>
        </Stack>
      </Stack>
      </Center>

  )
}

export default PokemonCardComponent
