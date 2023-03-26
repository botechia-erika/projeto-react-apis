
import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyled = createGlobalStyle`

    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    list-style-position: inside;
    

    :root{
        --shadow-Ctn1: rgba(0, 0, 0, 0.4) 0px 30px 90px;
        --dark-blue:  rgb(10, 0, 32);
        --green-200:  #48ff00;
        --shadow-card01: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        --shadow-card02: 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4);
        --shadow-card03: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
        --badge-shadow1:  rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        --rounded-23: 23px;
        --shadow-ArrowBtn:  0px 2px 8px rgba(0, 0, 0, 0.25), 0px 0px 16px rgba(0, 0, 0, 0.1), inset 0px -1px 0px rgba(0, 0, 0, 0.25), inset 0px -2px 4px #000000, inset 0px 2px 6px rgba(255, 255, 255, 0.3), inset 0px 1px 2px rgba(255, 255, 255, 0.24);
        --bg-API:  linear-gradient(180deg, #FF0000 0%, #882727 59.9%);
        --bg-All: #5D5D5D;
        --primary-id: #DC0A2D;
        --secondary-id: #F9CF30;
        --light-Grass: #729F92;
        --light-Fire: #EAAB7D;
        --light-Water: #33A4F5;
        --light-Bug: #71C3FF;
        --light-Normal: #BF9762;
        
        --badge-GROUND: #965A00;
        --badge-GHOST: #5A1E64;
        --badge-POISON: #AB00AE;
        --badge-FLYING: #B5DFE8;
        --badge-NORMAL: #B3B3B3;
        --badge-DARK: #1C1C1C;
        --badge-BUG: #3BB900;
        --badge-FIRE: #FF9900;
        --badge-WATER: #00A0E4;
        --badge-GRASS: #57921C;
        --badge-DRAGON: #00458A;
        --badge-ELECTRIC: #FFE600;
        --badge-FAIRY: #FFC2F9;
        --badge-FIGHTING: #E40000;
        --badge-ICE: #6AD2FF;
        --badge-PLANT: #70DF00;
        --badge-PSYCHIC: #FF81F2;
        --badge-ROCK: #E1B237;
        --badge-STEEL: #2A4950;
                --white-default: #FFFF;

        --gradient-nav: linear-gradient(135deg, #e83a68 0%, #cd004e 100%);
        --gradient-BG: linear-gradient(90deg, #c5c5c5 0%, #c5c5cb 35%, #d9d9d9 94%, #bfc1c4 100%);
    }

.App{
    padding-top: 100px;
    padding: 100px auto;
    background: var(--gradient-BG);
}
ul, li{
margin: 5px 20px;
list-style-type: none;
}

`