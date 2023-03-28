import React, {useState,  createContext} from "react";
export const PokedexContext = createContext()

export function PokedexProvider({children}){
const [pokedex, setPokedex] = useState([])
  
const addToPokedex = (pokemon)=>{
    
    setPokedex([...pokedex, pokemon])
    console.log(pokemon)
}



return(
    <PokedexContext.Provider value={{pokedex , setPokedex, addToPokedex}}>
    {children}
    </PokedexContext.Provider>
)
}

