import React from "react"
import styled from "styled-components"

export const MenuBox = styled.nav`
position: fixed; display: flex;   width: 95%;
top: 0;
margin: 0px 2.5%;

min-height: 80px;
display: flex;
    padding-left: 2rem;
    padding-right: 2rem;
    align-items: flex-start;
    justify-content: flex-start;
    background: var(--gradient-nav);
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
    border: 2px solid rgb(0, 0, 0);
align-self: flex-start;
`

export const Title = styled.h1`
display: flex;
height: 10vh;
flex-flow: column wrap;
width: 60%;
align-self: flex-start;
text-align: left;
justify-content: flex-start;

`
export const  HeaderNavImg = styled.img`
height: 100%;
object-fit: contain;
margin-top: auto;
justify-self: flex-start;
`