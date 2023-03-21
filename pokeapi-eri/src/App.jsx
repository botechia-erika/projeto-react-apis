import React from 'react';
import {Routes , Route} from 'react-router-dom'
import   './Globals/normalize.css'
import { ChakraProvider } from '@chakra-ui/react'


import {GlobalStyled} from './Globals/globalStyled';
import {HeaderNavbar} from './Components/HeaderNavbar/index'
import { PokemonList } from './Components/PokemonList/index';
import { PokeDetails } from './Components/PokeDetails/index';
import {Hero} from './Globals/Hero/index';
import { PokeSearch } from './Components/PokeSearch';

function App() {
  return ( 
  <ChakraProvider>   
     <GlobalStyled/>  <div className="App">
   <HeaderNavbar/>
   <Routes>
    <Route path="/" element={<Hero/>} />
    <Route path="/pokemons" element={<PokemonList />}/>
    <Route path="/pokemons/:pokeName" element={<PokeDetails/>}/>   
    <Route path="/search" element={<PokeSearch/>}/>   
    <Route path="/pokedex/:idUsername" element={<h1>USER POKEDEX</h1>}/>
    </Routes>    </div>

</ChakraProvider>  );
}

export default App;
