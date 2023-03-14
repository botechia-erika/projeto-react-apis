import React from 'react';
import './normalize.css'
import  {useEffect} from 'react';
import {  useState } from 'react'
import axios from  'axios'
import styled from 'styled-components';

import './App.css';
import {GlobalStyled} from './globalStyled';

export const DivContainer = styled.div`
display: flex;
flex-flow: row wrap;
width: 100% ;
color: white;
background: #bc8080;
justify-content: space-around ;
`
export const PokemonItem = styled.div`
display: flex;
flex-flow: column wrap;
width: 440px;
height: 260px; ;
color: white;
margin: 33px auto;
border: 2px solid black ;
border-radius:22px;

img{
  position:  relative;
  align-self:  flex-end;
  max-height: 324px;
  min-width: 210px;
  max-width: 420px ;
  top: 16px;
  right: -10%;
  object-fit: cover ;
  position: center;
}

li{
  color: black
  
}
`


 export const TypeBadge = styled.p`
color: white;
`
function App() {
  const URL_API = ('https://pokeapi.co/api/v2/')
const [pokemons , setPokemons] = useState([])

const requestPokemon = async()=>{
  const response = await axios.get(URL_API + 'pokemon/')
  Promise.all(
    response.data.results.map(pokemon=>axios.get(pokemon.url))).then(data=>{setPokemons(data)})
}


  useEffect(()=>{
    requestPokemon()

  }, [])


  return (
    <div className="App">

 
    <GlobalStyled/> 
   
<DivContainer>

  {pokemons.map(pokemon=>(
<PokemonItem key={pokemon.data.id}>
    <h2>
        <span>{pokemon.data.id}</span>{pokemon.data.name}
      </h2>
       <ul>
  <li>{pokemon.data.stats.count}</li>
      </ul>       <img src={pokemon.data.sprites.other['dream_world']['front_default']} alt="pokemon img"/>  
       
        <hr/>

</PokemonItem>
  
))}

    </DivContainer>
</div>
  );
}

export default App;
