
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useEffect,  useState} from 'react'
import {Box, Image, Button, Divider, Progress, Spinner, Badge, Flex, Heading, ButtonGroup, LinkBox} from '@chakra-ui/react' 
import {Grid, GridItem } from '@chakra-ui/react'
import {PokeDContainer, H2Battle, BoxImg, ImgPoke, BoxBadge} from './styledDetailsPoke'
import bgPokeDex from './../../assets/bg/bgPokeDex.png'

export const DetailsPokePage = () => {
const [dataPokemon, setDataPokemon] = useState({})
const [loader, setLoader] = useState(true)
const {pokeName} = useParams()
const URL_API_Details = ('https://pokeapi.co/api/v2/pokemon/')  
const BgPokedex = bgPokeDex

const [nextStage , setNextStage] = useState('')
const [previousStage, setPreviousStage]  = useState('')
const fetchId = async() =>{
const responseFetch = await axios.get(URL_API_Details + pokeName )
setNextStage([])
setDataPokemon(responseFetch)

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

    <Box w={'100%'}>
        {
        !loader ? ( 
         
    <PokeDContainer bg={'var(--yellow-App)'}  key={dataPokemon.data.name}>
    

    <H2Battle zIndex={'10'}>{dataPokemon.data.name.toUpperCase()}

</H2Battle>

<Flex>
          <Flex w={'50%'} minW={'200px'} minH={'300px'} justifyContent={'center'} flexFlow={'column wrap'}>

          <ul key={dataPokemon.data.id}>
  {dataPokemon.data.stats.map(pokeStat=>(
  <li width={'40%'}>
    <Box w={'40%'} minW={'180px'}>
    {pokeStat.stat.name}: {pokeStat['base_stat']}
  
    <Progress  hasStripe value={pokeStat['base_stat']} bg={'blue.200'} />
  </Box>
  </li>
))}  
  </ul>
 

         
          </Flex>
          <Divider orientation='vertical' />
          <Flex w={'50%'} minW={'100px'} paddingBottom={'50px'} minH={'100px'} flexFlow={'row wrap'} justifyContent={'center'} alignContent={'baseline'}>
          <img maxH={'100px'} src={dataPokemon.data.sprites.other['home']['front_default']} alt="pokemon img"/>  
         
       
       <Button bg={'yellow.300'} minW={'120px'} w={'40%'}>
       <Link to={'/pokedex'}>MyPokedex</Link>
       </Button>
       <Button bg={'yellow.300'} w={'40%'} minW={'120px'}>
       <Link to={'/'}>Pokemons</Link>
       </Button>


 

        
          </Flex>
</Flex>

<Flex w={'100%'} justifyContent={'center'}>
     <Box rounded={'28px'} p={'1rem'} maxW={'65%'} minW={'200px'} maxH={'210px'} bg={'whitesmoke'} overflow={'scroll'} alignContent={'center'}>
    {dataPokemon.data.moves.map(moveTypes=>(
      <Badge alignSelf={'center'}  m={'15px auto'} marginRight={'2px'} textAlign={'center'} p={'2'} rounded={'2xl'} minW={'70px'} bg={'var(--yellow-App)'} border={'2px solid gold'}
         key={moveTypes.move.url} color={'black'} >{moveTypes.move.name}</Badge>
        ))}
      
          </Box>
         
          <Divider orientation='vertical'  p={'2'} />

          <Box w={'30%'} minW={'100px'} minH={'180px'}>
          <Flex height={'100%'} flexFlow={'row wrap'} justifyContent={'space-around'} alignContent={'center'}>
          <BoxImg>
          <img src={dataPokemon.data.sprites.versions['generation-v']['black-white']['animated']['back_default']} alt="pokemon img"/>  

          </BoxImg>
          <BoxBadge>
          {...dataPokemon.data.types.map(typeName=>(
           
<Badge  color={'white'} ronded={'28px'} style={{"background": `var(--badge-${typeName.type.name.toUpperCase()})`}}
              >
            {typeName.type.name}
  </Badge> ))}
  </BoxBadge>
          <BoxImg>
         
          <img src={dataPokemon.data.sprites.versions['generation-v']['black-white']['animated']['front_default']} alt="pokemon img"/>  

          </BoxImg>
        </Flex>
          </Box>
<Divider orientation='vertical'  p={'2'} />
</Flex>


   
    </PokeDContainer>
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
</Box>
)
}
