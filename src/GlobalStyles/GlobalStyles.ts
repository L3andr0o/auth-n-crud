import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto Condensed';
    }
    body{
    width: 100%;
    height: 100%;
    position: relative;
    }
`