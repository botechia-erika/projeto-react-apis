import { Link } from 'react-router-dom';
import styled from 'styled-components';
import  players1  from './../assets/game/players01.png';
import
{ Container, Grid
,  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Card,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
} from '@chakra-ui/react';
import { PokedexProvider } from '../globals/Context';


const Button7 = styled.button`
position: fixed;
z-index:11;
top: 20px;
left:68%;
background: #00ffd9;
height:40px;
padding: 0.2rem 0.61rem;
border: 3px solid black;
border-radius: 14px;
color: black;
`
export function PokedexPage(){
  const player = players1  

      return(
        <>
      
<Container maxW='container.2xl' bg='green.400' color='#262626'>


<Flex py={2} justifyContent={'space-around'}>
<Card maxW='sm' maxH={'500px'}>
  <CardBody>
  <Heading size='lg' textAlign={'center'} background={'red.400'}
  mb='30px'>Bem-Vindo Treinador</Heading>
    <Image maxH={'220px'} w={'100%'}
      objectFit={'contain'}
      bg={'whitesmoke'}
      src={players1}
      alt='avatar pokeTrainer'
      borderRadius='2xl'
      position={'top center'}
    />
    <Stack mt='6' spacing='3'>


      <Text color='#340404.600' fontSize='2xl'>
    <strong>Total de Pokemons: 0</strong>
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
<p>Não perca tempo!</p>
  </CardFooter>
</Card>
    </Flex>

  </Container>
</>

    )
}
