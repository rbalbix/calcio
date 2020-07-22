import React, { useEffect, Suspense, lazy } from 'react';
import { useRoute, useIsFocused } from '@react-navigation/native';

import SuspenseLoading from '../../components/SuspenseLoading';
const Rank = lazy(() => import('../../components/Rank'));
const Matches = lazy(() => import('../../components/Matches'));

import { connect, disconnect } from '../../services/socket';

import { Container } from './styles';

export default function Detail() {
  const route = useRoute();
  const isFocused = useIsFocused();
  const info = route.params.info;

  function setupWebSocket() {
    disconnect();
    connect();
  }

  useEffect(() => {
    if (isFocused) {
      setupWebSocket();
    }
    return () => {
      disconnect();
    };
  }, [isFocused]);

  return (
    <Container>
      <Suspense fallback={<SuspenseLoading />}>
        <Rank info={info} isFocused={isFocused} />
        <Matches info={info} />
      </Suspense>
    </Container>
  );
}
