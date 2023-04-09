import React from 'react'
import {useState, useEffect} from 'react'
import {  BrowserRouter, Routes, Route} from 'react-router-dom'
import { PokemonsHome } from '../Pages/PokemonsHomePage/PokemonsHome'
import { DetailsPage } from '../pages/DetailsPage'
import {PokedexPage} from '../Pages/PokedexPage/PokedexPage'
import { GamePage } from '../pages/GamePage'
import { BattlePage } from '../pages/BattlePage'
import { Container, Flex } from '@chakra-ui/react'
export function AppRouter() {
  const URL_API = ('https://pokeapi.co/api/v2/')
  const [userList, setUserList] = useState([])
  const [collectionAll , setCollectionAll] = useState([])
  const [pokeList, setPokeList] = useState([]) 

  return (
    <Flex>
    <BrowserRouter>
   
         <Routes>

    <Route path="/" element={<PokemonsHome />}/>
    <Route path="/pokemon/:pokeName" element={<DetailsPage/>} />    
    <Route path="/pokedex" element={<PokedexPage/>} />
    <Route path="/pokedex/game" element={<GamePage/>} />
    <Route path="/pokedex/battle" element={<BattlePage/>} />
 </Routes>    
    </BrowserRouter>
 </Flex>
  )
}