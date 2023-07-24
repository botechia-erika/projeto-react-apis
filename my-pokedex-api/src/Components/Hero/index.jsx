import { Link } from 'react-router-dom';
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';

import styled from 'styled-components';
  import DefaultIcon01 from '../../assets/Icons/DefaultIcon01.png'


const ButtonNav = styled.button`
position: fixed;
z-index:11;
top: 20px;
right: 10%;
background: #f3ff14;
height:40px;
padding: 0.2rem 1rem;
border: 3px solid black;
border-radius: 14px;
`

  export  function Hero() {

/*    const [sliderItem, setSliderItem] = useState({pokemon.data.sprites.other['dream_world']['front_default']} alt="pokemon img"/> }) 

    const changePictureAuto = ()=>{
      useTimeout(()=> {  <img src={pokemonImgList})
    }*/
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
              <ButtonNav>
<Link to={'/pokedex'}>
  My Pokedex</Link></ButtonNav>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}>
              
              <h1>
                <img src={DefaultIcon01}  alt="logo" />
              </h1> 
              </Heading>
            <h2 fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Bem vindo a MyPokeAPI!
            </h2>
            <Text>Um lugar para <strong>Caçar e Guardar</strong> seus Pókemons</Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'red.500',
                }}>
                
                <Link to={'/pokedex'}>
  My Pokedex
</Link>
              </Button>
              <Button rounded={'full'}>
                <Link to="/pokemons">
              Caçar Pokemons
                 </Link> 
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    );
  }