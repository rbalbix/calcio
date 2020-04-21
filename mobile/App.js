import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

YellowBox.ignoreWarnings(['Expected style']);

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#1e7a0e' />
      <Routes />
    </>
  );
}
