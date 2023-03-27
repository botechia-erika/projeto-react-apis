import styled from 'styled-components'
import BgArena from './../../assets/bg/bgCard.png'
export const ContainerGame = styled.div`

    margin: 0;
    padding: 0;
    width: 90vw;
    min-height: 85vh;
    max-height: 100vh
    ul, li{
list-style-position: inside;
padding-left: 1rem;
}
.container {
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
}


nav>ul {
 
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    height: 80px;
    flex-wrap: wrap;
 
    justify-content: center;
    align-items: center;
     background-color: cadetblue;
}

nav>ul>li{
    padding-left: 4rem;
}

nav ul li>a {
    text-decoration: none;
    color: wheat;
}

.drop-list {
    display: none;
}

nav ul li.show-drop:hover>ul.drop-list {

    margin-top: 10px;
    margin-top: 30px;
    background-color: rgb(255, 153, 0);
    display: block;
    max-width: 200px;
    height: auto;
}

nav ul li.show-drop:hover>ul.drop-list>li {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bolder;
}

nav ul li.show-drop:hover>ul.drop-list>li:hover,
a:hover {
    background-color: yellow;
    border-radius: 15px;
    border: 2px
color: black;
    transition-property: all;
    color: black;
    font-weight: bold;
    line-height: 2rem;
}
#nav-advice{
    margin-top: 1rem;
    padding: 0.5rem;
    background-color: black;
    text-decoration: none;
    color: white;
    font-size: large;
    line-height: auto;
}

#headerBrandImg{
    object-fit: contain;
    width: 300px;
}
header {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 20vh;
   justify-content: center;
    align-self: center;
    margin-bottom: 5vh;
}

h1 {
  
    font-family: 'Roboto', sans-serif;
     font-weight: 900;
     font-size: 3.25rem;
     text-shadow: 2px 6px 0px rgba(28, 12, 8, 0.84);
     color: #F69711;
    text-shadow: 2px 6px 0px rgba(28, 12, 8, 0.84);
    align-self: flex-end;
    margin-bottom: 2rem;
    margin-top: 4rem;
    color: #f6e711;
    line-height: 4rem;
    text-align: center;
    background-image: url("./../images/bg/bg-header-01.png");
     background-repeat: no-repeat;
     background-size: cover;
     background-position-x: center center;
     align-items: center;
     text-align: center;
}




.containerMainBox {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 55vh;
    align-self: space-around;
  
}


section {
    display: flex;
    flex-flow: row wrap;
    width: 90%;
    justify-content: space-around;
    align-items:  center;
}

.boxContainerBtn {
    display: flex;
    width: 70%;
    height: 15vh;
    gap: 2rem;
    justify-content: center;
    align-items: center;
}

#boxImgArt1 {
    width: 100%;
    height: 50%;
    background-image: url("./../images/logoMightyDucksHockeyLeague.png");
    background-size: contain;
}
.image-aside {
    width: 80px;
}

header {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    height: 13vh;
    justify-content: space-around;
    align-items: center;
}
main {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    min-height: 60vh;
    justify-content: space-around;
    align-items: center;
    background-image: url("./../images/bg/bg-main-01.svg");
    background-repeat: no-repeat;
    background-position: right top;
}

.main-about {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    min-height: 70vh;
    justify-content: space-around;
    align-items: center;
    background-image: url("./../images/bg/bg-main-01.svg");
    background-repeat: no-repeat;
    background-position: right top;
}

.main-form {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    min-height: 70vh;
}

aside {
    display: flex;
    flex-flow: column wrap;
    width: 15%;
    height: 100%;
    justify-content: space-around;
    align-items: space-around;
    background-color: rgb(170, 152, 252);
}





.row-section {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 50%;
}

.aside-form {
    display: flex;
    flex-flow: column wrap;
    width: 30%;
    height: 50vh;
}

fieldset,
legend {
    width: 50vw;
    color: rgb(29, 1, 1);
    font-weight: bolder;
}

input {
    height: 1rem;
    width: 50%;
    height: 1.3rem;
    margin: 1rem;
    align-self: center;
    color: gray;
    text-align: center;
}
.img-relative{
    max-width: 200px;
}
.radio-input {
    width: 10px;
}
.boxDobleArticle {
    height: 80%;
    width: 40%;
    background-color: rgb(115, 255, 157);
    transition: .3s;
    box-shadow: 2px 2px 2px rgb(87, 87, 87);
    border-radius: 15px;
}

.boxIconsArticle , .article-index{
    height: 100%;
    width: 20%;
    background-color: rgb(255, 220, 115);
    text-align: center;
    background-color: darkred ;
align-self: center;
    background-size: cover;
    background-position: top left;
    background-repeat: no-repeat;
    transition: .3s;
    box-shadow: 2px 2px 2px rgb(87, 87, 87);
    border-radius: 15px;
}

.boxIconsButtons {
    height: 60px;
    width: 250px;
    background-color: rgb(115, 255, 157);
    text-align: center;
    transition: .3s;
    box-shadow: 2px 2px 2px rgb(87, 87, 87);
    border-radius: 15px;
    align-self: center;
}
.cardBtn{
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: center;
}



/*#d17e2f;*/


.main-display section{
    margin-top: 2rem;
    align-self: center;
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    gap: 5px;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    background-color: #F69711;
}




@media(max-width: 768px) {
    html {
        font-size: 16px + 2 * ((100vw - 360px) / 768px);
    }
    .boxDobleArticle {
        height: 450px;
        width: 370px;
        background-color: rgb(115, 255, 157);
        text-align: center;
    
        transition: .3s;
        box-shadow: 2px 2px 2px rgb(87, 87, 87);
        border-radius: 15px;
        margin-top: 4rem;
    }
    .boxIconsArticle {
        height: 450px;
        width: 370px;
        background-color: rgb(115, 255, 157);
        text-align: center;
    
        transition: .3s;
        box-shadow: 2px 2px 2px rgb(87, 87, 87);
        border-radius: 15px;
        margin-top: 4rem;
    }

}
footer {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 5vh;
    background-color: rgb(185, 245, 179);
    align-self: center;
    justify-content: center;
}

`

export const MainContainer = styled.div`
width: 100%;
display: flex;
flex-flow: column wrap;
margin-left: 5vw;
background: url({bgArena});
background-size: cover;
background-position: center top;
height: 80vh;
padding-top: 10vh;
padding-bottom: 10vh;
border-radius: 15px;
box-shadow:var(--shadow-Ctn1);
`