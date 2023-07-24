import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useEffect,  useState} from 'react'
import {Box, Button, ButtonGroup, Progress, Spinner, Badge, Flex, Heading, Container} from '@chakra-ui/react' 
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

    <>
        {
        !loader ? ( 
          


<Grid
  h="85vh"
  w={'100%'}
  templateRows="repeat(2, 1fr)"
  templateColumns="repeat(5, 1fr)"
  gap={4}
  key={dataPokemon.data.id}
  >

  <GridItem rowSpan={2} colSpan={1} bg="tomato" />
  <GridItem colSpan={2} bg="papayawhip" />
  <GridItem colSpan={2} bg="papayawhip" />
  <GridItem colSpan={4} bg="tomato" />
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
    </>
  )
}
