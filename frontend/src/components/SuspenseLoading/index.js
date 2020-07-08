import React from 'react';
import ReactLoading from 'react-loading';

import { Container, Text } from './styles';

const SuspenseLoading = () => {
  return (
    <Container>
      <ReactLoading type="spokes" color="#1E7A0E" height="4rem" width="4rem" />
      <Text>Carregando...</Text>
    </Container>
  );
};

export default SuspenseLoading;
