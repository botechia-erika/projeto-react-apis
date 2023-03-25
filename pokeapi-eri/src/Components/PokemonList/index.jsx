import React from "react"
import  {useEffect} from 'react';
import {  useState } from 'react'
import { Link } from "react-router-dom"
import axios from  'axios'
import { DivContainer } from "./styled"
import Pokeball  from "../../assets/pngwing.png"
import { Paginnation } from "../../components/Paginnation";
      import {
        Heading,
        Avatar,
        Box,
        Center,
        Image,
        Flex,
        Text,
        Stack,
        Button,
        useColorModeValue,
        Badge,
        Img,
        Container,
      } from '@chakra-ui/react';
      
      export function PokemonList(){
      const [posts, setPosts] = useState([])
      const pokeball1= Pokeball
      
      const URL_API = ('https://pokeapi.co/api/v2/')
        
        const [pokemons , setPokemons] = useState([])

        const requestPokemon = async()=>{
          const response = await axios.get(URL_API + 'pokemon?limit=175&offset=0')
          Promise.all(
            response.data.results.map(pokemon=>axios.get(pokemon.url))).then(data=>{setPokemons(data)})
            
        }
        
        
          useEffect(()=>{
            requestPokemon()
    
          }, [])
        
            console.log(pokemons)
        
          return(   
      <>
      <Container w={'100%'}>
      <Paginnation/>
      </Container>
      <DivContainer py={4}>
     
        {pokemons.map(pokemon=>(
      
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
          
{          pokemon.data.types.map(item=>(
<Badge
fontWeight={9}
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
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'yellow.200',
              }}>
              Message
            </Button>
            <Button
              flex={1}
              color={'black'}
              bg={'yellow.400'}
              fontSize={'md'}
              rounded={'full'}
              _focus={{
                bg: 'yellow.200',
              }}>
          <Link to={'/pokemons/' + pokemon.data.name}
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

      
        
      ))}
      
          </DivContainer>
     </>
      )
      }