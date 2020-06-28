import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { AppLoading } from 'expo';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';

YellowBox.ignoreWarnings(['Expected style']);

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#1e7a0e' />
      <Routes />
    </>
  );
}
