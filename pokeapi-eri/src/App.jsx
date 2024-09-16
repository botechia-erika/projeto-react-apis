import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'


import {GlobalStyled} from './theme/globalStyled';
import {HeaderNavbar} from './components/HeaderNavbar/index'
import { AppRouter } from './router/AppRouter';import './theme/normalize.css'
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
