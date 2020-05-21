import React from 'react';
import Routes from './routes';
import { SnackbarProvider } from 'notistack';

import GlobalStyle from './styles/global';

function App() {
  return (
    <SnackbarProvider
      hideIconVariant={false}
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
