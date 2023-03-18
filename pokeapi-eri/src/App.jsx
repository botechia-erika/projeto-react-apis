import React from 'react';
import {Routes , Route} from 'react-router-dom'
import   './Globals/normalize.css'
import { ChakraProvider } from '@chakra-ui/react'


import {GlobalStyled} from './Globals/globalStyled';
import {HeaderNavbar} from './Components/HeaderNavbar/index'
import { PokemonList } from './Components/PokemonList/index';
import { PokeDetails } from './Components/PokeDetails/index';
import {Hero} from './Globals/Hero/index';

function App() {
  return (  <div className="App">
  <ChakraProvider>    <GlobalStyled/> 

  

   <HeaderNavbar/>
   <Routes>
    <Route path="/" element={<Hero/>} />
    <Route path="/pokemons" element={<PokemonList/>}/>
    <Route path="/pokemons/:pokeId" element={<PokeDetails/>}/>   
    <Route path="/pokedex/:idUsername" element={<h1>USER POKEDEX</h1>}/>
    </Routes>

    
</ChakraProvider></div>
  );
}

export default App;
