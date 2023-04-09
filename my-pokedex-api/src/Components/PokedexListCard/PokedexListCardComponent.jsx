import React from 'react'

export const PokedexListCardComponent = ({pokedex}) => {
  return (
    <div>
         {pokedex.map((pokemon) => pokedex.find((poke)=>poke.data.name == pokemon.data.name)?
      (         
        <ListPokedex key={pokemon.data.id}>
        
        <TitleCard>{pokemon.data.name}</TitleCard>
        <img src={pokemon.data.sprites.other['dream_world']['front_default']} width='90%' height='100px' alt="pokemon img"/>  
        <button onClick={()=>deletePokemon(pokemon)}>delete pokemon</button>     
 </ListPokedex>
      ):
      (
        <div>
        <h2>SEM POKEMONS</h2>
      </div>
      )
    )}
    </div>
  )
}
