import React from 'react'
import {useState, useEffect} from 'react'
import { Routes, Route} from 'react-router-dom'
import { PokemonsPage } from './../Pages/PokemonsPage'
import { DetailsPage } from '../pages/DetailsPage'
import {PokedexPage} from './../pages/PokedexPage'
import { GamePage } from './../pages/GamePage'
import { BattlePage } from '../pages/BattlePage'
export function AppRouter() {
  const URL_API = ('https://pokeapi.co/api/v2/')
  const [userList, setUserList] = useState([])
  const [collectionAll , setCollectionAll] = useState([])
  const [pokeList, setPokeList] = useState([]) 

  return (
    <div>
   
         <Routes>

    <Route path="/" element={<PokemonsPage />}/>
    <Route path="/pokemon/:pokeName" element={<DetailsPage/>} />    
    <Route path="/pokedex" element={<PokedexPage/>} />
    <Route path="/pokedex/game" element={<GamePage/>} />
    <Route path="/pokedex/battle" element={<BattlePage/>} />
 </Routes>    
    </div>
 
  )
}