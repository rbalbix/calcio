import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';

const SuspenseLoading = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#1e7a0e" />
      <Text>Carregando...</Text>
    </Container>
  );
};

export default SuspenseLoading;
