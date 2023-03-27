import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useEffect,  useState} from 'react'
import {Box, Button, ButtonGroup, Progress, Spinner} from '@chakra-ui/react' 

import {

 Grid, GridItem } from '@chakra-ui/react'

export const DetailsPage = () => {
const [dataPokemon, setDataPokemon] = useState({})
const [loader, setLoader] = useState(true)
const {pokeName} = useParams()
const URL_API_Details = ('https://pokeapi.co/api/v2/pokemon/')  
const [nextStage , setNextStage] = useState('')
const [previousStage, setPreviousStage]  = useState('')
const fetchId = async() =>{
const responseFetch = await axios.get(URL_API_Details + pokeName )
setNextStage()
setDataPokemon(responseFetch)
console.log(dataPokemon)
setLoader(false)
}

  useEffect(() => {
        fetchId()
      
}, [])

  return (

    <div>
        {
        !loader ? ( 
          

<Grid
  h='87vh'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={6}
  p={3}
  key={dataPokemon.data.id}
>
  <GridItem colSpan={3} bg='papayawhip'>
<h2>{dataPokemon.data.name}</h2>

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
  <img src={dataPokemon.data.sprites.other['dream_world']['front_default']} alt="pokemon img"/>  

    </GridItem>
 
  <GridItem colSpan={6}  bg='tomato' >
<ButtonGroup>
  <Button>Stage</Button>
  <Button>StageNext</Button>
</ButtonGroup>

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
