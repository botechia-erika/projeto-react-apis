import React from 'react';
import {Routes , Route} from 'react-router-dom'
import   './Globals/normalize.css'
import { ChakraProvider, Switch } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'


import styled from 'styled-components';

import {GlobalStyled} from './Globals/globalStyled';
import {HeaderNavbar} from './Components/HeaderNavbar/index'
import { PokemonList } from './Components/PokemonList';
import { PokeDetails } from './Components/PokeDetails';




function App() {
  return (
    <div className="App">
    <GlobalStyled/> 
<ChakraProvider>
   <HeaderNavbar/>
   <Routes>
    <Route path="/pokemons" element={<PokemonList/>}/>
    <Route path="/pokemons/:pokeId" element={<PokeDetails/>}/>   
    </Routes>

    </ChakraProvider>
</div>
  );
}

export default App;
