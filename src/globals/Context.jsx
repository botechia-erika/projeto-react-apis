import React, {useState,  createContext} from "react";
export const PokedexContext = createContext()

export function PokedexProvider({children}){
const [pokedex, setPokedex] = useState([])
  
const addToPokedex = (pokemon)=>{
    
    setPokedex([...pokedex, pokemon])

}

const deletePokemon = (pokemon)=>{
    
  setPokedex(pokedex.filter((poke=>poke.data.name != pokemon.data.name)))

}

return(
    <PokedexContext.Provider value={{pokedex , setPokedex, addToPokedex, deletePokemon}}>
    {children}
    </PokedexContext.Provider>
)
}

