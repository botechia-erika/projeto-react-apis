
import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyled = createGlobalStyle`

    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;


    :root{


        --shadow-card01: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        --light-Grass: #729F92;
        --light-Fire: #EAAB7D;
        --light-Water: #33A4F5;
        --light-Bug: #71C3FF;
        --light-Normal: #BF9762;
        

        --badge-Poison: #AD61AE;
        --badge-Flying: #6892B0;
        --badge-Normal: #8A8A8A;
        --badge-Bug: #316520;
        --badge-Fire: #F44900;
        --badge-Water: #33A4F5;

        --white-default: #FFFF;
    }
`