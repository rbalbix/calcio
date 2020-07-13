import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  Suspense,
  lazy,
} from 'react';
import { RefreshControl } from 'react-native';
import { useRoute } from '@react-navigation/native';

import SuspenseLoading from '../../components/SuspenseLoading';
const Rank = lazy(() => import('../../components/Rank'));
const Matches = lazy(() => import('../../components/Matches'));

import { connect, disconnect } from '../../services/socket';

import { Container } from './styles';

export default function Detail() {
  const rankListRef = useRef();
  const matchListRef = useRef();
  const [refreshing, setRefreshing] = useState(false);

  const route = useRoute();
  const info = route.params.info;

  function setupWebSocket() {
    disconnect();
    connect();
  }

  useEffect(() => {
    setupWebSocket();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    rankListRef.current.rankListRef();
    matchListRef.current.matchListRef();

    setRefreshing(false);
  }, [refreshing]);

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Suspense fallback={<SuspenseLoading />}>
        <Rank info={info} ref={rankListRef} />
        <Matches info={info} ref={matchListRef} />
      </Suspense>
    </Container>
  );
}
