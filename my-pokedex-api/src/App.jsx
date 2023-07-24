import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import  {PokedexProvider}  from './globals/Context';
import { AppRouter } from './root/AppRouter';
import {GlobalStyled} from './theme/globalStyled';
import { NavbarComponent } from './Components/Navbar/NavbarComponent';
import './theme/normalize.css'


export function App() {
  
  
  return ( 

  <ChakraProvider>   
  <PokedexProvider>
    <div className='App'>
    <GlobalStyled/>  
    <NavbarComponent/>
      <AppRouter/>     
      </div>
  </PokedexProvider>  
  </ChakraProvider>
);
}

