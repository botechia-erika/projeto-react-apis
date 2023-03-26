import { ContainerGame , MainContainer} from "./styled"
export function DisplayGame(){
    return(
<ContainerGame>
<MainContainer>
<div className="first-block"></div>
<div className="three-blocks-container">
    <div>
        <div className="blue-block">1</div>
        <div className="yellow-block">2</div>
    </div>
    <div className="green-block">3</div>
</div>
<div className="three-blocks-container">
    <div>
        <div className="blue-block">4</div>
        <div className="yellow-block">5</div>
    </div>
    <div className="green-block">6</div>
</div>

<div className="mclassNamedle-container">
    <div className="black-block">7</div>
    <div className="black-block">8</div>
</div>
<div className="three-blocks-container">
    <div>
        <div className="white-block">9</div>
        <div className="white-block">10</div>
    </div>
    <div className="white-block">11</div>
</div>
</MainContainer>
</ContainerGame>
)
}