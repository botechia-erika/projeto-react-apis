import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useEffect,  useState} from 'react'
import {Box, Button, ButtonGroup, Progress, Spinner, Badge, Flex} from '@chakra-ui/react' 
import {Grid, GridItem } from '@chakra-ui/react'
import styled from 'styled-components'
const EnvolveChainBtn= styled.button`
height: 50px;
display: inline-block;
background: whitesmoke;
border: 5px groove #0a0036;
border-radius: 15px;
margin: 10px auto;
padding: 0.5rem;
`
const Img1 = styled.img`
height: 190px;
align-self: center;
width: 80%;
margin-left: 10%;
`
const PokeNameTitle = styled.h2`
position: fixed;
top: 10px;
color: white;
font-weight: 900;
left: 50%;
font-size: 1.9rem;
z-index: 11;
margin-right: 2rem;
`
export const DetailsPage = () => {
const [dataPokemon, setDataPokemon] = useState({})
const [loader, setLoader] = useState(true)
const {pokeName} = useParams()
const URL_API_Details = ('https://pokeapi.co/api/v2/pokemon/')  


const [nextStage , setNextStage] = useState('')
const [previousStage, setPreviousStage]  = useState('')
const fetchId = async() =>{
const responseFetch = await axios.get(URL_API_Details + pokeName )
setNextStage([])
setDataPokemon(responseFetch)
console.log(dataPokemon)
setLoader(false)
}

  useEffect(() => {
        fetchId()
      
}, [])

const displayInfo = ()=>{
  pokemon.data.filter(pokeStages =>{
    pokeStages.stages['envolves_to']
  })
}
  return (

    <div>
        {
        !loader ? ( 
          

<Grid
  maxH='75vh'
  templateRows='repeat( 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={3}
  p={2}
  key={dataPokemon.data.id}
>
  <GridItem colSpan={3} bg='papayawhip'>
<PokeNameTitle>{dataPokemon.data.name.toUpperCase()}</PokeNameTitle>


<ul key={dataPokemon.data.id}>
  {dataPokemon.data.stats.map(pokeStat=>(
  <li>
    <Box width={'70%'}>
    {pokeStat.stat.name}: {pokeStat['base_stat']}
  
    <Progress hasStripe value={pokeStat['base_stat']} />
  </Box>
  </li>
))}  
  </ul>

    </GridItem>
  <GridItem colSpan={3} bg='papayawhip' >
  <Img1 src={dataPokemon.data.sprites.other['dream_world']['front_default']} alt="pokemon img"/>  
  <ul>{...dataPokemon.data.types.map(typeName=>(
<li         style={{"background": `var(--badge-${typeName.type.name.toUpperCase()})`}}
              >
            {typeName.type.name}
  </li> ))}
  </ul>
  <Flex width={'100%'} justifyContent={'space-around'}>
  <img src={dataPokemon.data.sprites.versions['generation-v']['black-white']['animated']['front_default']} alt="pokemon img"/>  
  <img src={dataPokemon.data.sprites.versions['generation-v']['black-white']['animated']['back_default']} alt="pokemon img"/>  
  </Flex>
    </GridItem>
 
  <GridItem colSpan={6} height="90px" bg='#1c0236' >
<Flex height="120px" alignContent={'space-around'}>
  <EnvolveChainBtn>  <Link to={'/pokedex'}>
  MyPokedex</Link></EnvolveChainBtn>
  <EnvolveChainBtn>  <Link to={'/'}>
  CaçarPokemons</Link></EnvolveChainBtn>
  
  <EnvolveChainBtn>Envolve</EnvolveChainBtn>

 

  </Flex>
  
<Flex>
<Box overflow={'scroll'}>{dataPokemon.data.moves.map(moveTypes=>(
      <Badge bg={'#707070'} m={'15px'} border={'2px solid #0c0801'}
         key={moveTypes.move.url} color={'white'} p={'5px'}>{moveTypes.move.name}</Badge>
        ))}
      </Box>

</Flex>
  
    </GridItem>
 
</Grid>

            )
            : 
            (
              <Spinner
              thickness='6px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='600px'
            />
            )
        }
    </div>
  )
}
