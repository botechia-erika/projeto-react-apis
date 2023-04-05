import React from 'react'
import {useState, useEffect} from 'react'
import { Routes, Route} from 'react-router-dom'
import { LandingPage } from './../pages/LandingPage'
import { List } from '../pages/List'
import { DetailsPage } from '../pages/DetailsPage'
import {PokemonsList} from '../pages/PokemonsList'
import { Search } from './../pages/Search'
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

    <Route path="/" element={<PokemonsList />}/>
    <Route path="/pokemon/:pokeName" element={<DetailsPage/>} />    
    <Route path="/pokedex" element={<List/>} />
    </Routes>    
    </div>
 
  )
}