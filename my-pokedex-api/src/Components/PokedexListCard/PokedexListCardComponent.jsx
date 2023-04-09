import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Swal from 'sweetalert2'
const BoxPokedex = styled.div`
display: inline-block;
width: 30%;
min-width: 322px;
min-height: 410px;
background: white;
margin: 30px auto;
text-align: center;
`
const PokedexCtnImg = styled.div`
display: flex;
flex-flow: column wrap;
width: 90%;
background: url('https://i.ibb.co/xSVPFpR/pokeOpen.png');
background-size: cover;
background-position: -5% center;
height: 250px;
padding: 3rem;
object-fit: contain;
margin: 30px 5%;
img{
padding-bottom: 20px;
}`

export const PokedexListCardComponent = ({pokemon, deletePokemon}) => {
 

  return (
       
     
        <BoxPokedex>
        <h2>{pokemon.data.name}</h2>
        <PokedexCtnImg>
        <img src={pokemon.data.sprites.other['dream_world']['front_default']} width='90%' height='100px' alt="pokemon img"/>  
       </PokedexCtnImg>
        <button onClick={()=>{deletePokemon(pokemon) ,
Swal.fire({
  title: pokemon.data.name.toUpperCase() + ' CAPTURADO!',
  text: 'Pokemon guardado em pokedex',
  imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FpTceTTU3ueXmM%2Fgiphy.gif&f=1&nofb=1&ipt=aedbdb3dac2c2c456d2ce8f7a48b100447a2f2625f7dd586cfc8305e672a6dfb&ipo=images',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Pokemon',
})}}>Deletar</button>          
        <Link to={'/pokemon/' + pokemon.data.name}>+PokeInfo</Link>
  
</BoxPokedex>
      )
}
