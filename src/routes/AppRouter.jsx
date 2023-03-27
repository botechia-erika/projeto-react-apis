import React from 'react'
import {useState, useEffect} from 'react'
import { Routes, Route} from 'react-router-dom'
import { LandingPage } from './../pages/LandingPage'
import { List } from '../pages/List'
import { DetailsPage } from '../pages/DetailsPage'
import {PokedexPage} from './../pages/PokedexPage'
import { Search } from './../pages/Search'
import { GamePage } from './../pages/GamePage'

export function AppRouter() {
  const URL_API = ('https://pokeapi.co/api/v2/')
  const [userList, setUserList] = useState([])
  const [collectionAll , setCollectionAll] = useState([])
  const [pokeList, setPokeList] = useState([]) 


const pokeFetch = async()=>{
  const response = await axios.get(URL_API + `pokemon?limit=175&offset=0`)
  Promise.all(
    response.data.results.map(pokemon=>axios.get(pokemon.url))).then(data=>{setCollectionAll(data)})
    .then(setPokeList(...collectionAll))
  }


  const addByUser = (pokemonSelect)=>{
    const searchInUserList = userList.find(
      (pokemonInUserList)=> PokemonInUserList.name === pokemonSelect.name
    )
  
  if(!searchInUserList){
    const newUserList = [...userList, pokemonSelect];
    setUserList(newUserList)
  }
  };

  
    useEffect(()=>{
      pokeFetch()

    }, [])

  
  
  return (
    <div>
   
         <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/pokemons/:pNum" element={<List />}/>
    <Route path="/details/:pokeName" element={<DetailsPage/>} />   
    <Route path="/pokemons" element={<Search/>} />   
    <Route path="/pokedex/:userId" element={<PokedexPage/>} />
    <Route path="/game/:gameId" element={<GamePage/>} />
    
    </Routes>    
    </div>
 
  )
}