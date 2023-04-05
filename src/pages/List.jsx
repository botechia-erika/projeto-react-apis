import {useEffect, useContext, useState} from "react"
import { Link } from "react-router-dom";
import { PokedexContext } from './../globals/Context'
import { PokedexItem } from "./../Components/PokedexItem";

import axios from "axios";

import styled from "styled-components";

const ListAll = styled.li`
display: inline-block;
padding: 2rem;
background: green;
color: white; 
font-size: 2rem;
width: 500px;
`
const ButtonNav2 = styled.button`
position: fixed;
z-index:11;
top: 20px;
right: 10%;
background: #f3ff14;
height:40px;
padding: 0.2rem 1rem;
border: 3px solid black;
border-radius: 14px;
`
const ListPokedex = styled.li`
display: inline-block;
padding: 2rem;
background: #f3f1f1;
width: 500px;
height: 560px;


img{
  max-height: 300px;
  object-fit: contain;
}

`
const TitleCard = styled.h2`

font-size: 3rem;

`
export  function List() {
const URL_API1 = "https://pokeapi.co/api/v2";
const [pokemons, setPokemons] = useState([]);
const [next, setNext] = useState("");
const [previous, setPrevious] = useState("");
const [pokedexList, setPokedexList] = useState([])
const {addToPokedex, deletePokemon , pokedex}=useContext(PokedexContext)
const handleNext = (url) => {
  requestPokemon(next);
}
useEffect(()=>{ 
 
}, [])
return (
  <div className="App">
               <ButtonNav2>
<Link to={'/pokemons'}>
  Caçar Pokemons</Link></ButtonNav2>
  <ul>
    {pokedex.map((pokemon) => pokedex.find((poke)=>poke.data.name != pokemon.data.name)?(
      <ListAll key={pokemon.data.id}>
<div>
      <TitleCard>  {pokemon.data.name}</TitleCard>
          <button onClick={()=>deletePokemon({pokemon})}>delete pokemon</button>          <Link to={'/pokemon/' + pokemon.data.name}
          
              color={'black'}
                dataPokemon = {pokemon}
              >
            +INFO
      
        </Link>
     </div>
      </ListAll>):
      (         
        <ListPokedex key={pokemon.data.id}>
        
        <TitleCard>{pokemon.data.name}</TitleCard>
        <img src={pokemon.data.sprites.other['dream_world']['front_default']} width='90%' height='100px' alt="pokemon img"/>  
      <button onClick={()=>{
      
      deletePokemon(pokemon)
        setPokemons(pokemons.filter(poke=>(poke.data.id == pokemon.data.id)))
        }
      }>delete to  pokedex </button>
 </ListPokedex>
      )
    )}
    </ul>
    <button onClick={() => handlePrevious()}>previous</button>
    <button onClick={() => handleNext()}>next</button>
  </div>
);
}
