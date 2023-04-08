import {useEffect, useContext, useState} from "react"
import { Link } from "react-router-dom";
import { PokedexContext } from '../globals/Context'
import { PokedexItem } from "../Components/PokedexItem";

import axios from "axios";

import styled from "styled-components";

const ListAll = styled.li`
display: inline-block;
padding: 2rem;
background: ${()=>{props.colorType}};
width: 500px;
height: 560px;

`

const ListPokedex = styled.li`
display: flex;
flex-flow: column wrap;
width: 370px;
max-width: 400px;
height: 200px;
background-color: #f6f8ff;
box-shadow: #575757 2px 2px 2px 0px;
box-sizing: border-box;
font-family: "Poppins", sans-serif;
align-items: space-around;
justify-content: space-around;
align-self: center;
padding: 1rem;
margin-bottom: 40px;
img{
  position: relative;
  top: -80px;
  right: -10px;
height: 190px;
width: 190px;
  object-fit: contain;
}

`
const ButtonNav4 = styled.button`
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
const TitleCard = styled.h2`

font-size: 3rem;

`
export  function PokemonsPage() {
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
  MyPokedex</Link></ButtonNav4>
  <ul>
    {pokemons.map((pokemon, indice) => pokedex.find((poke)=>poke.data.name == pokemon.data.name)?(
      <ListAll key={indice}>
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
        <ListPokedex key={indice}>
        
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
    </ul>
    <button onClick={() => handlePrevious()}>previous</button>
    <button onClick={() => handleNext()}>next</button>
  </div>
);
}
