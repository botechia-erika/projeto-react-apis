import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Hero } from '../src/components/Hero'
import { PokemonList } from '../src/components/PokemonList'
import { PokeDetails } from '../src/components/PokeDetails'
import { PokeDexHome } from '../src/pages/PokedexHome'
import { PokeSearch } from '../src/components/PokeSearch'

export const AppRouter = () => {
  return (
    <div>
   
         <Routes>
    <Route path="/" element={<Hero/>} />
    <Route path="/pokemons" element={<PokemonList />}/>
    <Route path="/pokemons/:pokeName" element={<PokeDetails/>}/>   
    <Route path="/search" element={<PokeSearch/>}/>   
    <Route path="/pokedex" element={<PokeDexHome/>}/>
    </Routes>    
    </div>
 
  )
}

 