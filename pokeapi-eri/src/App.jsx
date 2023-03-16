import React from 'react';
import   './Globals/normalize.css'
import { ChakraProvider } from '@chakra-ui/react'

import  {useEffect} from 'react';
import {  useState } from 'react'
import axios from  'axios'
import styled from 'styled-components';
import {GlobalStyled} from './Globals/globalStyled';
import {HeaderNavbar} from './Components/HeaderNavbar/index'
export const DivContainer = styled.div`
display: flex;
flex-flow: row wrap;
width: 100% ;
color: white;
background: var(--bg-All);
justify-content: space-around ;
`
export const PokemonItem = styled.div`
display: flex;
flex-flow: column wrap;
width: 440px;
height: 260px; 
color: white;
margin: 33px auto;
border: 2px solid black ;
border-radius:22px;

img{
  position:  relative;
  align-self:  flex-end;
  max-height: 224px;
  min-width: 210px;
  max-width: 420px ;
  top: 16px;
  right: -10%;
  object-fit: cover ;
  position: center;
}

ul, li{
list-styled-type: none;
}

`






function App() {
  const URL_API = ('https://pokeapi.co/api/v2/')
const [pokemons , setPokemons] = useState([])

const requestPokemon = async()=>{
  const response = await axios.get(URL_API + 'pokemon?limit=100&offset=0')
  Promise.all(
    response.data.results.map(pokemon=>axios.get(pokemon.url))).then(data=>{setPokemons(data)})
}


  useEffect(()=>{
    requestPokemon()

  }, [])

    console.log(pokemons)

  return (
    <div className="App">
    <GlobalStyled/> 
<ChakraProvider>


   <HeaderNavbar/>
<DivContainer>

  {pokemons.map(pokemon=>(

<PokemonItem key={pokemon.data.id}>
    <h2>
        <span>{pokemon.data.id}</span>{pokemon.data.name}
      </h2>
     
  <p>{
 pokemon.data['types'].map(item=>
<span>{item.type.name}</span>
  )}
  </p>     
  
  
   <img src={pokemon.data.sprites.other['dream_world']['front_default']} alt="pokemon img"/>  
       

</PokemonItem>
  
))}

    </DivContainer>
    </ChakraProvider>
</div>
  );
}

export default App;
