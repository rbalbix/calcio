import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import { ActivityIndicator, RefreshControl } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import SuspenseLoading from '../../components/SuspenseLoading';
const Top4 = lazy(() => import('../../components/Top4'));

import api from '../../services/api';

import { Container, Category, Loading, TeamView } from './styles';

export default function Main() {
  const [ranks, setRanks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  function navigateToDetail(info) {
    navigation.navigate('Category', { info });
  }

  async function loadRanks() {
    setLoading(true);

    const response = await api.get('/rank/top');

    setLoading(false);
    setRanks([response.data.A, response.data.B]);
  }

  useEffect(() => {
    loadRanks();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    loadRanks();

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
