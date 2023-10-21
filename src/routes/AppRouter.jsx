import React from 'react'
import {useState, useEffect} from 'react'
import { Routes, Route} from 'react-router-dom'
import { LandingPage } from './../pages/LandingPage'
import { PokedexList } from '../pages/PokedexList'
import { DetailsPage } from '../pages/DetailsPage'
import {PokemonsList} from '../pages/PokemonsList'
import { Search } from './../pages/Search'
import { GamePage } from './../pages/GamePage'
import { BattlePage } from '../pages/BattlePage'
import { Hero } from '../components/Hero'
export function AppRouter() {
  const URL_API = ('https://pokeapi.co/api/v2/')
  const [userList, setUserList] = useState([])
  const [collectionAll , setCollectionAll] = useState([])
  const [pokeList, setPokeList] = useState([]) 

  return (
    <div>
 
         <Routes>

   
    <Route path="/pokemon/:pokeName" element={<DetailsPage/>} />    
    <Route path="/pokedex" element={<PokedexList/>} />
    <Route path="/battle" element={<BattlePage/>} />
    <Route index element={<PokemonsList />}/>
    </Routes>    
    </div>
 
  )
}