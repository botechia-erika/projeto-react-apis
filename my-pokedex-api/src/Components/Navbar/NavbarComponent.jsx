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
  Image,
} from '@chakra-ui/react'

import LogoNav from '../../assets/LogoNav.png'




export function NavbarComponent(){
  
const Logo = LogoNav
return(
  <>
  


<Grid zIndex={'10'} w={'95%'} templateColumns={'0.5fr 120px 0.5fr '} gap={0} position={'fixed'} top={'0'} left={'2.5%'} right={'2.5%'}>
  <GridItem h='80px'  bg='blue.500' />
  <GridItem h='80px' bg='blue.500'>
      <Image
      src={Logo}
      alt="img logo"
      objectFit="contain"
      height={'80px'}
      width={'120px'}
      margin={'auto'}
      />
    </GridItem>
  <GridItem h='80px' bg='blue.500' />

</Grid>
    

</>
)
}
