import { Link } from 'react-router-dom';

import {MenuBox , Title,HeaderNavImg
} from './styled';
import LogoNav from '../../assets/LogoNav.png'

import {

    Button,
    Center
  } from '@chakra-ui/react'


export function HeaderNavbar(){
const Logo = LogoNav
return(
  <>
  
<MenuBox >


    <Title>
      <HeaderNavImg
      src={Logo}
      alt="img logo"
      width="220px"
      />
      </Title>

</MenuBox>
</>
)
}
