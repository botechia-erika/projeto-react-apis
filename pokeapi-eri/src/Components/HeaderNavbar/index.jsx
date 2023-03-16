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



export function HeaderNavbar(){

return(
  <>
  
<MenuBox>


    <Title>Chakra App</Title>
    

    <Button colorScheme='teal'>Log in</Button>

</MenuBox>
</>
)
}
