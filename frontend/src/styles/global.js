import { createGlobalStyle } from 'styled-components';
import * as theme from './variables';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font-size: 1.4rem;
  font-family: 'Roboto', sans-serif;
  background: ${theme.bgColor};
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

html {
  /* every 1rem will be considered 10px - responsiveness */
  font-size: 62.5%;
}

html,
body,
#root {
  height: 100vh;
}

input,
button{
  font-family: Roboto, sans-serif;
}

button {
  cursor: pointer;
}

form input {
  width: 100%;
  height: 6.0rem;
  color: #333;
  border: 0.1rem solid #dcdce6;
  border-radius: 0.8rem;
  padding: 0 2.4rem;
}

.button {
  width: 100%;
  height: 6.0rem;
  background: ${theme.primary};
  border: 0;
  border-radius: 0.8rem;
  color: #fff;
  font-weight: 700;
  margin-top: 1.6rem;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 1.8rem;
  line-height: 6.0rem;
  transition: filter 0.2s;
}

.button:hover {
  filter: brightness(90%);
}

@media(max-width: 768px) {
  html {
    font-size: 50%;
  }
}

`;

export default GlobalStyle;
