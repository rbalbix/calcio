import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import { ActivityIndicator, RefreshControl } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import SuspenseLoading from '../../components/SuspenseLoading';
const Top4 = lazy(() => import('../../components/Top4'));

import api from '../../services/api';
import { connect, disconnect, subscribeToNews } from '../../services/socket';

import { Container, Category, Loading, TeamView } from './styles';

export default function Main() {
  const [ranks, setRanks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  function navigateToDetail(info) {
    navigation.navigate('Category', { info });
  }

  function setupWebSocket() {
    disconnect();
    connect();
  }

  const rankList = useCallback(async () => {
    const response = await api.get('/rank/top');
    setRanks([response.data.A, response.data.B]);
  }, [ranks]);

  function loadRanks() {
    setLoading(true);
    rankList();
    setLoading(false);
  }

  useEffect(() => {
    loadRanks();
  }, []);

  useEffect(() => {
    setupWebSocket();
    subscribeToNews(() => rankList());
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    rankList();
    setRefreshing(false);
  }, [refreshing]);

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {loading ? (
        <TeamView>
          <Loading>
            <ActivityIndicator size="large" color="#1e7a0e" />
          </Loading>
        </TeamView>
      ) : (
        ranks.map((rank, index) => (
          <Category key={index}>
            <Suspense fallback={<SuspenseLoading />}>
              <Top4 rank={rank} navigateToDetail={navigateToDetail} />
            </Suspense>
          </Category>
        ))
      )}
    </Container>
  );
}
