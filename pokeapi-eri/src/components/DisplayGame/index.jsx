import { Container } from "@chakra-ui/react"
import React from "react"
import { ContainerGame , MainContainer} from "./styled"
export function DisplayGame(){
    return(
<ContainerGame>

<Container w={"100%"} h="100vh">
<section className="three-blocks-container">
    <div>
        <div className="blue-block">1</div>
        <div className="yellow-block">2</div>
    </div>
    <div className="green-block">3</div>
</section>
<section className="three-blocks-container">
    <div>
        <div className="blue-block">4</div>
        <div className="yellow-block">5</div>
    </div>
    <div className="green-block">6</div>
</section>


    <div className="black-block">8</div>

<section className="three-blocks-container">
    <div>
        <div className="white-block">9</div>
        <div className="white-block">10</div>
    </div>
    <div className="white-block">11</div>
</section>
</Container>
</ContainerGame>
)
}