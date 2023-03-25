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
import { AppRouter } from '../router/AppRouter';
function App() {
  
  
  return ( 
  <div className="App">
  <ChakraProvider>   
     <GlobalStyled/>  

  <AppRouter/>     

  <HeaderNavbar/>
</ChakraProvider></div>  );
}

export default App;
