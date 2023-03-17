
import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyled = createGlobalStyle`

    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;


    :root{


        --shadow-card01: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        --shadow-card02: 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4);
        --shadow-card03: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
        
        /*border radius*/
        --rounded-23: 23px;
        
        
        --bg-All: #5D5D5D;
        --primary-id: #DC0A2D;
        --secondary-id: #F9CF30;
        --light-Grass: #729F92;
        --light-Fire: #EAAB7D;
        --light-Water: #33A4F5;
        --light-Bug: #71C3FF;
        --light-Normal: #BF9762;
        

        --badge-poison: #AD61AE;
        --badge-flying: #6892B0;
        --badge-normal: #8A8A8A;
        --badge-bug: #316520;
        --badge-fire: #F44900;
        --badge-water: #33A4F5;

        --white-default: #FFFF;
    }

    
ul, li{
list-styled-type: none;
}
`