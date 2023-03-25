import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
import { List } from '../pages/List'
import { Details } from '../pages/Details'
import {Pokedex}from '../pages/Pokedex'
import { Search } from '../pages/Search'

export const AppRouter = () => {
  return (
    <div>
   
         <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/list/:pNum" element={<List />}/>
    <Route path="/pokemons/:pokeName" element={<Details/>}/>   
    <Route path="/search" element={<Search/>}/>   
    <Route path="/pokedex" element={<Pokedex/>}/>
    </Routes>    
    </div>
 
  )
}