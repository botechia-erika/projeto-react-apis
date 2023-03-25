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
  MyPokedex
</Link></ButtonNav>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}>
              
              <h1>
                <img src={DefaultIcon01}  alt="logo" />
              </h1> 
              </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'red.500',
                }}>
                <Link to="/list">
                myPokedexApi
                 </Link> 
              </Button>
              <Button rounded={'full'}>
                <Link to="/list/">
             Caçar Pokemons
                 </Link> 
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            position={'left' }
                                      src={
              'https://img.elo7.com.br/product/zoom/176659D/painel-festa-banner-pokemon-02-lona-tecido.jpg'
            }
          />
        </Flex>
      </Stack>
    );
  }