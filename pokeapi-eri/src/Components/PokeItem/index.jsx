import React from "react"
import { Link } from "react-router-dom"
import { Badge, Button } from "@chakra-ui/react"
import {  PokemonItem } from "./styled"
export function PokeItem({pokemon}){
    
    const searchIndex = (element, typeNames) => {
        [...typeNames].findIndex(element.toUpperCase)
       }
       
return(
<PokemonItem key={pokemon.data.id}>
    <h2>
        <span>{pokemon.data.id}</span>{pokemon.data.name}
      </h2>
  <p>{
 pokemon.data['types'].map(item=>
  <Badge colorScheme={item.type.color}>{item.type.name}</Badge>
  )}
  </p>     
   <img src={pokemon.data.sprites.other['dream_world']['front_default']} alt="pokemon img"/>  
   <Button>
<Link to={'/pokemons/' + pokemon.data.id}>+INFO</Link>
</Button>
</PokemonItem>


)}