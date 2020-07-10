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

import api from '../../services/api';
import { connect, disconnect, subscribeToNews } from '../../services/socket';

import { Container } from './styles';

export default function Detail() {
  const [round, setRound] = useState(0);
  const refRound = useRef(round);
  const [total, setTotal] = useState(0);
  const [totalRegular, setTotalRegular] = useState(0);
  const [loadingRank, setLoadingRank] = useState(true);
  const [loadingMatches, setLoadingMatches] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [rank, setRank] = useState([]);
  const [matches, setMatches] = useState([]);

  const route = useRoute();
  const info = route.params.info;

  function setupWebSocket() {
    disconnect();

    connect();
  }

  async function loadRank() {
    setLoadingRank(true);

    const response = await api.get('/rank', {
      params: { category: info.category },
    });

    setLoadingRank(false);
    setRank(response.data);
    setupWebSocket();
  }

  async function loadMatches() {
    setLoadingMatches(true);

    const response = await api.get('/match', {
      params: { category: info.category, round },
    });

    setTotal(parseInt(response.headers['x-total-count']));
    setTotalRegular(parseInt(response.headers['x-total-regular-count']));
    if (round === 0) setRound(parseInt(response.headers['x-round']));

    setLoadingMatches(false);

    setMatches(response.data);
  }

  async function loadPreviousMatches() {
    if (round - 1 <= 0) return;
    setRound(round - 1);
  }

  async function loadNextMatches() {
    if (round + 1 > total) return setRound(1);
    setRound(round + 1);
  }

  useEffect(() => {
    loadRank();
  }, []);

  useEffect(() => {
    refRound.current = round;
    loadMatches();
  }, [round]);

  useEffect(() => {
    subscribeToNews((data) => loadNews(data));
  }, []);

  const loadNews = async (data) => {
    const rank = await api.get('/rank', {
      params: { category: info.category },
    });
    setRank(rank.data);

    if (refRound.current === Number(data.round)) {
      const matches = await api.get('/match', {
        params: {
          category: info.category,
          round: refRound.current,
        },
      });
      setMatches(matches.data);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    loadRank();
    loadMatches();

    setRefreshing(false);
  }, [refreshing]);

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Suspense fallback={<SuspenseLoading />}>
        <Rank info={info} loading={loadingRank} rank={rank} />
        <Matches
          round={round}
          totalRegular={totalRegular}
          loadPreviousMatches={loadPreviousMatches}
          loadNextMatches={loadNextMatches}
          loading={loadingMatches}
          matches={matches}
        />
      </Suspense>
    </Container>
  );
}
