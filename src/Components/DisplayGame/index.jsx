import React from "react"
import { Container, Box } from "@chakra-ui/react"

import { ContainerGame , MainContainer} from "./styled"
export function DisplayGame(){
    return(
<ContainerGame>

<Container w="100vw" h="100vh">
<Flex w="100vw">
<Box w="20vw"></Box>
<Box bg='blue' w="20vw"></Box>
'
<Box w="20vw"></Box>
<Box w="20vw"></Box>

</Flex>
</Container>
</ContainerGame>
)
}