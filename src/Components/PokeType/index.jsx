import React from 'react'
import { TypeCtn } from './styled'

const pokeCategories = [ 'BUG', 'DARK', 'DRAGON', 'ELECTRIC', 'FAIRY', 'FIGHTING', 'FIRE', 'FLYING', 'GHOST', 'GRASS', 'GROUND', 'ICE', 'NORMAL', 'PLANT', 'POISON', 'PSYCHIC', 'STELL', 'WATER']
export function pokeColors(){

    switch(pokeType) {
           case "BUG":
             return "#316520";
           case "DARK":
             return "#5C5365";
        
           case "PSYCHIC":
             return "#F67176";
           case "ROCK":
             return "#C7B78B";
           case "STELL":
             return "#BBBBBB";
           case "WATER":
             return "#33A4F5";
           default:
             return "#8A8A8A";
         }
     }
export const PokeType = ({pokemon}) => {
const [ColorBadge , setColorBadge] = useState('')
 
setColorBadge({...pokemon.data.types.filter(type=>(type.name.toUppeCase())})
return (
    <TypeCtn colorType={ColorBadge}>
    
    </TypeCtn>
)}
   case "DRAGON":
             return "#0A6CBF";
           case "ELECTRIC":
             return "#F4D23B";
           case "FAIRY":
             return "#EC8FE6";
           case "FIGHTING":
             return "#CE4069";
           case "FIRE":
             return "#F44900";
           case "FLYING":
             return "#6892B0";
           case "GHOST":
             return "#5269AC";
           case "GRASS":
             return "#70B873";
           case "GROUND":
             return "#D97745";
           case "ICE":
             return "#74CEC0";
           case "NORMAL":
             return "#8A8A8A";
           case "POISON":
             return "#AD61AE";