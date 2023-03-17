import {
    Menu,
    Box,
    Heading,
    Flex, 
    Spacer,
    Button,
    Center
  } from '@chakra-ui/react'

import {MenuBox , Title
} from './styled';
import LogoNav from '../../assets/LogoNav.png'
import { Link } from 'react-router-dom';



export function HeaderNavbar(){
const Logo = LogoNav
return(
  <>
  
<MenuBox>


    <Title>
      <img
      src={Logo}
      alt="img logo"
      width="220px"
      />
      </Title>
      <button>
<Link to={'/pokedex'}>
  MyPokedex
</Link></button>
</MenuBox>
</>
)
}
