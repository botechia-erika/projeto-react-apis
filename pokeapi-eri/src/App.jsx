import React from 'react';
import {Routes , Route} from 'react-router-dom'
import   './theme/normalize.css'
import { ChakraProvider } from '@chakra-ui/react'


import {GlobalStyled} from './theme/globalStyled';
import {HeaderNavbar} from './components/HeaderNavbar/index'
import { PokemonList } from './components/PokemonList/index';
import { PokeDetails } from './components/PokeDetails/index';
import {Hero} from './components/Hero/index';
import { PokeSearch } from './components/PokeSearch';
import {PokeDexHome}from './pages/PokedexHome'
function App() {
  return ( <div className="App">
  <ChakraProvider>   
     <GlobalStyled/>  
   <HeaderNavbar/>
   <Routes>
    <Route path="/" element={<Hero/>} />
    <Route path="/pokemons" element={<PokemonList />}/>
    <Route path="/pokemons/:pokeName" element={<PokeDetails/>}/>   
    <Route path="/search" element={<PokeSearch/>}/>   
    <Route path="/pokedex" element={<PokeDexHome/>}/>
    </Routes>    

</ChakraProvider></div>  );
}

export default App;
