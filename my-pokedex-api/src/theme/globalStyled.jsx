
import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyled = createGlobalStyle`

    margin: 0;
    padding: 0;
    background: teal;
    font-family: 'Outfit', sans-serif;
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
        
        // cardColors

        --Bug-Pokemon: #A7B723;
        --Dark-Pokemon: #75574C
        --Dragon-Pokemon: 70737FF;
        --Electric-Pokemon: #F9CF30;      
        --
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
        font-size: 16px;
        --gradient-nav: linear-gradient(135deg, #e83a68 0%, #cd004e 100%);
        --gradient-BG: linear-gradient(90deg, #c5c5c5 0%, #c5c5cb 35%, #d9d9d9 94%, #bfc1c4 100%);
    }

.App{
    padding: 2rem 2rem;
    padding-top: 100px;
    padding: 100px auto;
    background: background-color: #35335F;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='540' height='450' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E");
}
ul, li{
    display: flex;
    flex-flow: row wrap;
width: 100%;
justify-self: flex-end;
margin-left: 0 ;
margin-right: 2rem;
list-style-type: none;
flex-direction: wrap;
color: black;
}

li{
    flex-flow: row wrap;
    min-width: 450px;
}
`