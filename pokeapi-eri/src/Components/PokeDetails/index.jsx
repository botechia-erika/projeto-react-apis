import React from 'react'
import { useParams } from 'react-router-dom'
import axios, { Axios } from 'axios'
import {useEffect,  useState} from 'react'

export const PokeDetails = () => {
const [dataPokemon, setDataPokemon] = useState({})
const [loader, setLoader] = useState(true)
 
    const URL_API_Details = ('https://pokeapi.co/api/v2/pokemon/' )  
    const {pokeId} = useParams()
const fetchId = async() =>{
const resId  = await axios.get(  URL_API_Details + pokeId)
  setDataPokemon(resId.data)

}

  useEffect(() => {
        fetchId()

}, [])
console.log(pokeId)  
  return (

    <div>
        { loader ? (
            <h1> {dataPokemon.name} </h1>
            )
            : 
            (
            <h2>Carregando</h2>
            )
        }
    </div>
  )
}
