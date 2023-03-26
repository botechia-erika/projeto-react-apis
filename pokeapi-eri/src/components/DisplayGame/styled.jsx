import styled from 'styled-components'
import BgArena from './../../assets/bg/bgCard.png'
export const ContainerGame = styled.div`

    margin: 0;
    padding: 0;
    width: 90vw;
    min-height: 85vh;
    max-height: 100vh

`

export const MainContainer = styled.div`
width: 100%;
display: flex;
flex-flow: column wrap;
margin-left: 5vw;
background: url({bgArena});
background-size: cover;
background-position: center top;
height: 80vh;
padding-top: 10vh;
padding-bottom: 10vh;
border-radius: 15px;
box-shadow:var(--shadow-Ctn1);
`