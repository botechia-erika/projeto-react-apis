import React from "react"
import  {useEffect} from 'react';
import {  useState } from 'react'
import axios from  'axios'
import { DivContainer } from "./styled"
import { PokeItem } from "../PokeItem/index"

export function PokemonList(){
  const [pagina, setPagina] = useState(1)

const [itemsPage, setItemsPage] = useState([3])



const URL_API = ('https://pokeapi.co/api/v2/')
  
  const [pokemons , setPokemons] = useState([])
  
  const showColor = ()=>{
  setColorBadge(`var(--badge-${item.data.toLowerCase()})`)
  }
  const requestPokemon = async()=>{
    const response = await axios.get(URL_API + 'pokemon?limit=100&offset=0')
    Promise.all(
      response.data.results.map(pokemon=>axios.get(pokemon.url))).then(data=>{setPokemons(data)})
  }
  
  
    useEffect(()=>{
      requestPokemon()
  
    }, [])
  
      console.log(pokemons)
  
    return(
<DivContainer>

  {pokemons.map(pokemon=>(

<PokeItem pokemon={pokemon}/>
  
))}

    </DivContainer>
)
}