import {useEffect, useContext, useState} from "react"
import Swal from 'sweetalert2'

import { Link } from "react-router-dom";
import {Badge, Box, Button, Stack, Flex, Input, FormLabel} from '@chakra-ui/react'
import axios from "axios";

import styled from "styled-components";
import { PokedexContext } from '../../globals/Context'
import { ContainerGame } from "../../Components/DisplayGame/styled";
import bgSearch from './../../assets/bg/bgSearch.png'


const ListPoke = styled.ul`
`
const ListAll = styled.li`
display: flex;
padding: 2rem;
max-width: 300px;
height: 560px;

`

const PokeCard1 = styled.li`
display: flex;
flex-flow: column wrap;
width:30%;
min-width: 310px;
height: 200px;
background-color: #f6f8ff;
box-shadow: #575757 2px 2px 2px 0px;
box-sizing: border-box;
font-family: "Poppins", sans-serif;
align-items: flex-start;
justify-content: space-around;
align-self: center;
padding-top: 6rem;
border-radius: 25px;
margin-bottom: 30px;
margin-top: 120px;
padding-left: 2rem;
div> img{
  position: relative;
  top: -110px;
  right: -200px;
min-height: 210px;
width: 124px;
  object-fit: contain;
  z-index: 1;
}
h2{
  font-size: 1.2rem;
}
`
const ButtonNav4 = styled.button`
position: fixed;
z-index:11;
top: 20px;
right: 10%;
background: #f3ff14;
height:40px;
padding: 0.2rem 1rem;
border: 3px solid black;
border-radius: 14px;
`
const TitleCard = styled.h2`

font-size: 3rem;

`



export  function PokemonsHome() {
const URL_API1 = "https://pokeapi.co/api/v2";
const [pokemons, setPokemons] = useState([]);
const [next, setNext] = useState("");
const [previous, setPrevious] = useState("");
const {addToPokedex, deletePokemon , pokedex}=useContext(PokedexContext)
const handleNext = (url) => {
  requestPokemon(next);
};
console.log(pokedex)
const handlePrevious = (url) => {
  requestPokemon(previous);
};
const requestPokemon = async (url) => {
  const response = await axios.get(url);
  setNext(response.data.next);
  setPrevious(response.data.previous);
  Promise.all(
    response.data.results.map((pokemon) => axios.get(pokemon.url))
  ).then((data) => {
    setPokemons(data);
  });
};
useEffect(()=>{ 
  requestPokemon(URL_API1 + "/pokemon");
}, [])




return (
  <div>
    <ButtonNav4>

<Link to={'/pokedex'}>
  MyPokedex</Link></ButtonNav4>
<Box w={'100%'} bg={'darkblue'}>            
<Flex  bgSize={'cover'} bgPosition={' center'} bgImage={bgSearch} h={'450PX'} alignContent={'center'} alignSelf={'flex-start'}>

</Flex>
</Box>
<Flex flexFlow={'column wrap'}>
  <ListPoke>

    {pokemons.map((pokemon, indice) => pokedex.find((poke)=>poke.data.name == pokemon.data.name)?(
      <span key={indice}></span>
):
      (         
<PokeCard1 key={indice}>
  <div>
<h2>{pokemon.data.name.toUpperCase()}</h2>
<Box>{...pokemon.data.types.map(typeName=>(
<Badge     style={{"background": `var(--badge-${typeName.type.name.toUpperCase()})`}}
              >
            {typeName.type.name}
  </Badge> ))}
  </Box>
<Flex>
<img src={pokemon.data.sprites.other['dream_world']['front_default']}  alt={"pokemon img"} />
</Flex>
</div>

<Box justifyContent={'flex-end'} marginLeft={'-210px'}>
<Flex alignSelf={'flex-end'}>

<Button onClick={()=>{
  addToPokedex(pokemon)

,
Swal.fire({
  title: pokemon.data.name.toUpperCase() + ' CAPTURADO!',
  text: 'Pokemon guardado em pokedex',
  imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FpTceTTU3ueXmM%2Fgiphy.gif&f=1&nofb=1&ipt=aedbdb3dac2c2c456d2ce8f7a48b100447a2f2625f7dd586cfc8305e672a6dfb&ipo=images',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Pokemon',
}),
pokemons.map.filter(pokeNext=>{
  setPokemons(pokeNext.data.name != pokemon.data.name)
})
handleNext()
}
}>CAPTURE</Button>
<Link to={`/pokemon/${pokemon.data.name}`}>DETAILS</Link>
</Flex>
</Box>
</PokeCard1>
      )
    )}
    </ListPoke>
    </Flex>
    <Button onClick={() => handlePrevious()}>previous</Button>
    <Button onClick={() => handleNext()}>next</Button>
  </div>
);
}
