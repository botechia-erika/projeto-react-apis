import React from 'react'
import { useParams } from 'react-router-dom'
import axios, { Axios } from 'axios'
import {useEffect,  useState} from 'react'
import {Spinner} from '@chakra-ui/react' 
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
          <main class="display-1" id="d1">
  <article class="card">
          <h2>{dataPokemon.name}</h2>
       
        
            <p>NAO REQUER Conhecimentos Previos de Programacao</p>
        

</article>
</main>
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
