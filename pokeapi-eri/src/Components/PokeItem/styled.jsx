import React from "react"
import styled from "styled-components"

export const PokemonItem = styled.div`
display: flex;
flex-flow: column wrap;
width: 440px;
height: 260px; 
color: white;
margin: 33px auto;
border: 2px solid black ;
border-radius:22px;

img{
  position:  relative;
  align-self:  flex-end;
  max-height: 224px;
  min-width: 210px;
  max-width: 420px ;
  top: 16px;
  right: -10%;
  object-fit: cover ;
  position: center;
}

ul, li{
list-styled-type: none;
}

`

