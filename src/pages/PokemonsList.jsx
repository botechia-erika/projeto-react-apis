import {useEffect, useContext, useState} from "react"
import { Link } from "react-router-dom";
import { PokedexContext } from './../globals/Context'
import { PokedexItem } from "./../Components/PokedexItem";
import { Flex } from "@chakra-ui/react";
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

const ListPokedex = styled.li`

padding: 2rem;
background: #fdfdfd;
    display: flex;
    border-radius: 15px;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    flex-direction: column;
    margin-bottom: 5rem;
    margin-right: 5rem;
    width: 25%;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
min-width: 350px;
height: 460px;


img{
  height: 200px;
    width: 100%;
    margin-top: 1rem;
}
button{
&&:hover {
    background: #620404;
    cursor: pointer;
}

{
    background: #ffff00;
    border: none;
    border-radius: 5px;
    border: 2px solid #000000;
    padding: 1rem;
    transition: all .1s ease-in-out;
}
`
const ButtonNav4 = styled.button`
position: fixed;
z-index:11;
top: 20px;
right: 10%;
background: #5292ff;
height:40px;
padding: 0.2rem 1rem;
border: 3px solid black;
border-radius: 14px;
`
const TitleCard = styled.h2`

font-size: 3rem;

`
export  function PokemonsList() {
const URL_API1 = "https://pokeapi.co/api/v2";
const [pokemons, setPokemons] = useState([]);
const [next, setNext] = useState("");
const [previous, setPrevious] = useState("");
const [pokedexList, setPokedexList] = useState([])
const {addToPokedex, deletePokemon , pokedex}=useContext(PokedexContext)
const handleNext = (url) => {
  requestPokemon(next);
};
console.log(pokedex)
const handlePrevious = (url) => {
  requestPokemon(previous);
};
const requestPokemon = async (url) => {
  const response = await axios.get(url);
  setNext(response.data.next);
  setPrevious(response.data.previous);
  Promise.all(
    response.data.results.map((pokemon) => axios.get(pokemon.url))
  ).then((data) => {
    setPokemons(data);
  });
};
useEffect(()=>{ 
  requestPokemon(URL_API1 + "/pokemon/");
}, [])
return (
  <div className="App">
                <ButtonNav4>
<Link to={'/pokedex'}>
  MyPokedéx</Link></ButtonNav4>
  <Flex as='li' flexFlow={'row wrap'}>

    {pokemons.map((pokemon) => pokedex.find((poke)=>poke.data.name == pokemon.data.name)?(
      <ListAll key={pokemon.data.name}>
<div>
      <TitleCard>  {pokemon.data.name}</TitleCard>
          <button onClick={()=>deletePokemon(pokemon)}>delete pokemon</button>          <Link to={'/pokemon/' + pokemon.data.name}
              color={'black'}
                dataPokemon = {pokemon}
              >
            +INFO
      
        </Link>
     </div>
      </ListAll>):
      (         
        <ListPokedex key={pokemon.data.name}>
        
        <TitleCard>{pokemon.data.name}</TitleCard>
        <img src={pokemon.data.sprites.other['dream_world']['front_default']} width='90%' height='100px' alt="pokemon img"/>        <Link to={'/pokemon/' + pokemon.data.name}>
  INFO</Link>
      <button onClick={()=>{
      
        addToPokedex(pokemon)
        setPokemons(pokemons.filter(poke=>(poke.data.id != pokemon.data.id)))
        }
      }>add to pokedex </button>

 </ListPokedex>
      )
    )}
 
    </Flex>
    <button onClick={() => handlePrevious()}>previous</button>
    <button onClick={() => handleNext()}>next</button>
  </div>
);
}
