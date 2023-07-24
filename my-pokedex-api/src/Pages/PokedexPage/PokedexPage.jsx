import {useEffect, useContext, useState} from "react"
import { Link } from "react-router-dom";
import { PokedexContext } from '../../globals/Context'
import { PokedexItem } from "../../Components/PokedexItem";

import axios from "axios";

import styled from "styled-components";
import { Image, Box, Container, Flex, Text, Button } from "@chakra-ui/react";

const ListAll2 = styled.ul`
display: flex;
flex-wrap: column wrap;
width:calc(90vw - 85px);
height: 100%;
align-self: flex-end;
margin-left: 4.5vw;
`
const ButtonNav2 = styled.button`
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
const ListPokedex = styled.li`
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

`
const TitleCard = styled.h2`
position: relative;
top: -100px;
font-size: 1.3rem;

`
export  function PokedexPage() {
const URL_API1 = "https://pokeapi.co/api/v2";
const [pokemons, setPokemons] = useState([]);
const [next, setNext] = useState("");
const [previous, setPrevious] = useState("");
const [pokedexList, setPokedexList] = useState([])
const {addToPokedex, deletePokemon , pokedex}=useContext(PokedexContext)
const handleNext = (url) => {
  requestPokemon(next);
}
useEffect(()=>{ 
 
}, [])
return (
  <>
  <Flex flexFlow={'row wrap'} w={'90%'}>
               <ButtonNav2>
<Link to={'/'}>
  Caçar</Link></ButtonNav2>
  <ListAll2>
    {pokedex.map((pokemon, indice) => pokedex.find((poke)=>poke.data.name == pokemon.data.name)?
      (         
        <ListPokedex key={indice}>
       
        <TitleCard>{pokemon.data.name}</TitleCard>
         <Flex  flexFlow={'row '} alignSelf={'center'} justifyContent={'space-around'}>
        <Button onClick={()=>deletePokemon(pokemon)} bg={'red.500'} color={'white'} rounded={'18px'} border={'2px solid black'} margin={'10px auto'}>  
           DELETAR
        </Button>   
        <Button bg={'yellow'} color={'black'} rounded={'18px'} border={'2px solid black'}  margin={'10px auto'}>  
        <Link to={'/pokemon/'+ pokemon.data.name}>
     
           +INFO




          </Link>
</Button>

  </Flex>
       
  <Image src={pokemon.data.sprites.other['dream_world']['front_default']} position={'relative'} width='137px' height='137px' right={'27px'} top={'-117px'} alt="pokemon img"/>  
 </ListPokedex>
      ):
      (
        <span key={indice}></span>
      )
    )}
    </ListAll2>
  <Container>    
</Container>
  </Flex>  
</>
);
}
