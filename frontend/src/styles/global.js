import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap'); */

:root{
  --primary-color         : #1E7A0E;

  --background-color      : #E0E0E0;
  --border-color          : #E0E0E0;
  --line-color            : #FFFFD8;

  --container-color-light : #FFFFFF;
  --container-color-dark  : #333333;

  --button-text-color     : #FFFFFF;
  --text-color            : #999999;
  --team-text-color       : #717171;

  --font-family           : 'Roboto', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

}

body {
  font-size: 1.4rem;
  font-family: var(--font-family);
  background: var(--background-color);
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

  .MuiSnackbarContent-message {
    font-size: 1.6rem;
  }
}

input,
button{
  font-family: var(--font-family);
}

button {
  cursor: pointer;
}

@media(max-width: 1170px) {
  html {
    font-size: 60%;
  }
}

@media(max-width: 1120px) {
  html {
    font-size: 58%;
  }
}

@media(max-width: 1080px) {
  html {
    font-size: 56%;
  }
}

@media(max-width: 1050px) {
  html {
    font-size: 54%;
  }
}

@media(max-width: 1010px) {
  html {
    font-size: 52%;
  }
}

@media(max-width: 970px) {
  html {
    font-size: 50%;
  }
}

@media(max-width: 940px) {
  html {
    font-size: 48%;
  }
}

@media(max-width: 900px) {
  html {
    font-size: 46%;
  }
}

@media(max-width: 876px) {
  html {
    font-size: 62.5%;
  }
}

@media(max-width: 590px) {
  html {
    font-size: 55%;
  }
}

@media(max-width: 520px) {
  html {
    font-size: 50%;
  }
}

@media(max-width: 470px) {
  html {
    font-size: 45%;
  }
}

@media(max-width: 430px) {
  html {
    font-size: 40%;
  }
}

@media(max-width: 370px) {
  html {
    font-size: 35%;
  }
}

@media(max-width: 320px) {
  html {
    font-size: 30%;
  }
}

@media(max-width: 280px) {
  html {
    font-size: 25%;
  }
}

@media(max-width: 240px) {
  html {
    font-size: 20%;
  }
}

@media(max-width: 200px) {
  html {
    font-size: 15%;
  }
}

@media(max-width: 150px) {
  html {
    font-size: 10%;
  }
}

`;

export default GlobalStyle;
