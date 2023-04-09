import React, {useState,  createContext} from "react";
export const PokedexContext = createContext()

export function PokedexProvider({children}){
const [pokedex, setPokedex] = useState([])
const [pokeType1, setPokeType1] = useState([])  
const addToPokedex = (pokemon)=>{
    
    setPokedex([...pokedex, pokemon])

}

const deletePokemon = (pokemon)=>{
    
  setPokedex(pokedex.filter((poke=>poke.data.name != pokemon.data.name)))

}

const defineType = (pokemon)=>{
[...pokemon].map.types(item=>(
 item[type[0]]['name'] 
    ))
return item
}

return(
    <PokedexContext.Provider value={{pokedex , setPokedex, addToPokedex, deletePokemon,
    pokeType1, setPokeType1, defineType    }}>
    {children}
    </PokedexContext.Provider>
)
}

