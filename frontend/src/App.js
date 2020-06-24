import React from 'react';
import Routes from './routes';
import { SnackbarProvider } from 'notistack';

import GlobalStyle from './styles/global';

function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      hideIconVariant={false}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <GlobalStyle />
      <Routes />
    </SnackbarProvider>
  );
}

export default App;
