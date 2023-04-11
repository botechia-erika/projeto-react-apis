import styled from 'styled-components'
import { useState } from 'react';
export const Box50 = styled.div`
display: flex;
width: 50%;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
min-width: 340px;
max-height: 350px;
height:485;
background: red;
margin-top: 40px;
margin: 30xp auto;
margin-bottom: 50px;
`

export const PokeDContainer = styled.div`
position: relative;
z-index: 0;
    padding: 1rem;
    width: 100%;

    min-height: 66vh;
  border-radius: 28px;
  margin-top: -20px;
    `

export const H2Battle = styled.h2`
z-index: 12;
width: 36%;
position: fixed;
top: 12%;

    font-family: 'Roboto', sans-serif;
     font-weight: 900;
     font-size: 1.3rem;
     color: var(--white-default);
     text-shadow: -2px 2px 0px black;
    text-align: center;
    background: var(--blue-App) ;
 
    border-radius: 15px;
    border : 2px groove var(--bg-All);
`
export const ImgPoke = styled.img`
position: absolute;
top: 48%;
align-self: flex-start;
width: 110px;
height: 110px;
margin-left: 20px;
z-index: 11;
`

export const ButtonImg = styled.button`
width: 80px;
height: 40px;
align-self: flex-start;
margin-left: 20px;
border: 2px dashed gold;
border-radius: 15px;
position: sticky;
bottom:10%;
background: yellow;
`

export const BoxImg = styled.div`
display: flex;
margin: 10px auto;
flex-flow: column wrap;
background:  var(--white-default);
border-radius: 14px;
width: 80px;
height: 80px;
padding: 0.5rem;
object-fit: cover;
border: 2px solid lightgray;
`

export const BoxBadge = styled.div`
display: flex;
margin: 5px auto;
flex-flow: column wrap;
background:  var(--white-default);
border-radius: 14px;
width: 150px;
min-height: 60px;
padding: 0.5rem;
object-fit: cover;
border: 2px solid lightgray;
justify-content: space-around;
text-align: center;
align=content: center;
text-shadow: -0.21px 0.21px 0px black;
`