import React from "react"
import styled from "styled-components"
import bgCard from '../../assets/bg/bgCard.png'
export const PokemonItem = styled.div`
display:inline-block;
width: 440px;
height: 260px; 
color: white;
border: 2px solid black ;
border-radius:22px;
box-shadow: var(--shadow-card02);
background: ${(props) => props.bgCard};
margin-top: 110px;
img{
  position: relative;
  max-width: 240px;
  max-width: 240px ;
  object-fit: cover ;
  padding-bottom: 76px;
  left: calc(100% - 250px);
  right: 0;
  top: -67px;
}



`

