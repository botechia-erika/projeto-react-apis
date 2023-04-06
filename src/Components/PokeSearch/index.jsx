import React from 'react'
import { SearchBox } from './styled'
import { Box, Input , Container, Flex, Select} from '@chakra-ui/react'

export const PokeSearch = () => {
  return (
    <Container size={'2xl'} display={'flex'} flexFlow={'row wrap'}>
    <Box w={'90%'}  h={'40vh'} flexFlow={'row wrap'}>
<Flex justifyContent={'space-around'} flexFlow={'row wrap'}>
<Input type='text' m={'30px 10px'} minW={'354px'} h={'48px'} borderRadius={'28px'} bg={'whitesmoke'} textColor={'black'} placeholder={'Nome do Pokemon'} display={'flex'}/>
<Select type='text' m={'30px 10px'} minW={'354px'} h={'48px'} borderRadius={'28px'} bg={'whitesmoke'} textColor={'black'} display={'flex'}>
<option value="0">Tipo de Pokemon</option>
<option value="1">Poison</option>

<option value="2">Poison</option>
<option value="3">Poison</option>
<option value="4">Poison</option>
<option value="5">Poison</option>
<option value="6">Poison</option>
<option value="7">Poison</option>
<option value="8">Poison</option>
<option value="9">Poison</option>
<option value="10">Poison</option>
<option value="11">Poison</option>
<option value="12">Poison</option>
  </Select>
  </Flex>
   </Box>
    </Container>
  )
}
