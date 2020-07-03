import React from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';

const Loading = ({ loading }) => {
  return loading ? (
    <Container>
      <ReactLoading type="spokes" color="#1E7A0E" height="2rem" width="2rem" />
    </Container>
  ) : (
    ''
  );
};

export default Loading;
