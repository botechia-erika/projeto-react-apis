import React, {useState,  createContext} from "react";
export const PokedexContext = createContext()

export function PokedexProvider({children}){
const [pokedex, setPokedex] = useState([])
  
const addToPokedex = (pokemon)=>{
    
    setPokedex([...pokedex])
    setPokedex(pokemon)
}



return(
    <PokedexContext.Provider value={{pokedex , setPokedex, addToPokedex}}>
    {children}
    </PokedexContext.Provider>
)
}

