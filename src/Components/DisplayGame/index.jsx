import React from "react"
import { Container, Box, Heading } from "@chakra-ui/react"

import { ContainerGame, H2Battle } from "./styled"
export function DisplayGame(){
    return(


<ContainerGame w="90vw" h="90vh" ml={'5vw'}>
<Container p={2}>

    <H2Battle>BATTLE PAGE</H2Battle>
</Container>
</ContainerGame>
)
}