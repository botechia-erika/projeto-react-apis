import { Link } from 'react-router-dom';
import {
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

import LogoNav from '../../assets/LogoNav.png'




export function HeaderNavbar(){
  
const Logo = LogoNav
return(
  <>
  


<Grid w={'100%'} templateColumns='repeat(3, 1fr, 220px , 1fr)' gap={6}>
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500'>
  <Title>
      <img
      src={Logo}
      alt="img logo"
      maxWidth="220px"
      />
      </Title>
    </GridItem>
  <GridItem w='100%' h='10' bg='blue.500' />

</Grid>
    

</>
)
}
