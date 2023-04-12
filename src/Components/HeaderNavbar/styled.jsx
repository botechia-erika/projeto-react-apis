import React from "react"
import styled from "styled-components"

export const MenuBox = styled.nav`
position: fixed; display: flex;   width: 95%;
top: 0;
margin: 0px 2.5%;

min-height: 80px;
display: flex;

    align-items: center;
    justify-content: center;
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
position: relative;
display: flex;
height: 10vh;
flex-flow: row wrap;
width: 100%;
align-self: center;
text-align: flex-end;
justify-content: center;

`
export const  HeaderNavImg = styled.img`
height: 100%;
object-fit: contain;
position: relative;
margin-top: 10px auto;
justify-self: center;
`