import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font: 400 14px Roboto, sans-serif;
  background: #dddddd;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

html,
body,
#root {
  height: 100%;
}

input,
button{
  font: 400 18px Roboto, sans-serif;
}

button {
  cursor: pointer;
}

form input {
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
}

.button {
  width: 100%;
  height: 60px;
  background: #1E7A0E;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;
}

.button:hover {
  filter: brightness(90%);
}

`;

export default GlobalStyle;
