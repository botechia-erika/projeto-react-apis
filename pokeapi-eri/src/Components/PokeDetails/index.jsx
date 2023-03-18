import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useEffect,  useState} from 'react'
import {Spinner} from '@chakra-ui/react' 
import {

 Grid, GridItem } from '@chakra-ui/react'

export const PokeDetails = () => {
const [dataPokemon, setDataPokemon] = useState({})
const [loader, setLoader] = useState(true)
 
    const URL_API_Details = ('https://pokeapi.co/api/v2/pokemon/' )  
    const {pokeId} = useParams()
const fetchId = async() =>{
const resId  = await axios.get(  URL_API_Details + pokeId)
  setDataPokemon(resId.data)

}

  useEffect(() => {
        fetchId()
      
}, [])

  return (

    <div>
        {
        loader ? ( 
          
<div>
<Grid
  h='87vh'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={6}
  p={3}
>
  <GridItem colSpan={3} bg='papayawhip'>
<h3>{dataPokemon.name}</h3>
<img src={"sprites/other/versions"} alt="pokemon img"/>  
    </GridItem>
  <GridItem colSpan={3} bg='papayawhip' />
 
  <GridItem colSpan={6}  bg='tomato' />

</Grid>
           </div>
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
