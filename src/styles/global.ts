import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root{
     --red: #e52e4d;
     --blue: #5429cc;
     
     --blue-light: #6933ff;
     
     --text-title: #363f5f;
     --text-body: #969cb3;
     
     --background: #f0f2f5;
     --shape: #ffffff;
 }
 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 html{
     //font-size: 16px
     @media (max-width: 1080px) {
         font-size: 93.75%; //font-size: 15px
     }

     @media (max-width:720px) {
         font-size:87.75%; //font-size:14px
     }
 }

 border-style, input, textarea, button{
     font-family:'Poppins', sans-serif;
     font-size:400;
 }

 h1,h2,h3,h4,h5,h6{
     font-weight:600;
 }

 body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: .6;
        cursor: not-allowed;
    }

`;
