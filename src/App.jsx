import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import  {PokedexProvider}  from './globals/Context';
import {GlobalStyled} from './theme/globalStyled';
import {HeaderNavbar} from './components/HeaderNavbar/index'
import { AppRouter } from './routes/AppRouter';
import './theme/normalize.css'
function App() {
  
  
  return ( 

  <ChakraProvider>   
  <PokedexProvider>
<div className='App'>
    <GlobalStyled/>  
      <AppRouter/>     
  <HeaderNavbar/>
  </div>

  </PokedexProvider>  
  </ChakraProvider>
);
}

export default App;
