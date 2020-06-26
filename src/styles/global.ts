import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 62.5%;
  }
  
  body {
    background: #F5F5F5;
  }

  a {
      text-decoration: none;
  }

  ul {
      list-style: none;
  }

  button {
    cursor: pointer;
  }

  input, button {
    font-family: Roboto, sans-serif;
  }

  textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  } 
`;
