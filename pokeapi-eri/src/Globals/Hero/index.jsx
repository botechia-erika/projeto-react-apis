import { useTimeout } from '../../hooks/useTimeout';
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
  import {DefaultIcon01} from './../../assets/Icons/DefaultIcon01.png'
  export default function Hero() {
const DefaultIcon1 = DefaultIcon01
/*    const [sliderItem, setSliderItem] = useState({pokemon.data.sprites.other['dream_world']['front_default']} alt="pokemon img"/> }) 

    const changePictureAuto = ()=>{
      useTimeout(()=> {  <img src={pokemonImgList})
    }*/
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Freelance
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Design Projects
              </Text>{' '}
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
                  bg: 'blue.500',
                }}>
                <Link to="/Pokedex">
                  <img width="40px" height="40" src={DefaultIcon01} alt={"icon1"} />
                 </Link> 
              </Button>
              <Button rounded={'full'}>
                <Link to="/Pokemons">
                  <img width="40px" height="40" src={DefaultIcon01} alt={"icon1"} />
                 </Link> 
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Flex>
      </Stack>
    );
  }