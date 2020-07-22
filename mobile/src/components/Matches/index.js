import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  Suspense,
  lazy,
} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import api from '../../services/api';
import { subscribeToNews } from '../../services/socket';

const Match = lazy(() => import('../Match'));

import { Category, CategoryTitle, RoundView, RoundText, Icon } from './styles';

const Matches = ({ info }) => {
  const [matches, setMatches] = useState([]);
  const [round, setRound] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalRegular, setTotalRegular] = useState(0);

  const isFocused = useIsFocused();
  const mounted = useRef();

  const refRound = useRef(round);

  const matchesList = useCallback(
    async (roundParam) => {
      if (mounted.current) {
        const response = await api.get('/match', {
          params: { category: info.category, round: roundParam },
        });
        setMatches(response.data);

        if (round === 0) {
          setRound(parseInt(response.headers['x-round']));
          setTotal(parseInt(response.headers['x-total-count']));
          setTotalRegular(parseInt(response.headers['x-total-regular-count']));
        }
      }
    },
    [round]
  );

  async function loadPreviousMatches() {
    if (round - 1 <= 0) return;
    setRound(round - 1);
  }

  async function loadNextMatches() {
    if (round + 1 > total) return setRound(1);
    setRound(round + 1);
  }

  useEffect(() => {
    if (isFocused) {
      mounted.current = true;
    }

    return () => {
      mounted.current = false;
    };
  }, [isFocused]);

  useEffect(() => {
    refRound.current = round;
    matchesList(round);
  }, [round]);

  useEffect(() => {
    subscribeToNews((data) => loadNews(data));
  }, []);

  const loadNews = (data) => {
    if (refRound.current === Number(data.round)) {
      matchesList(refRound.current);
    }
  };

  return (
    <Category>
      <CategoryTitle>JOGOS</CategoryTitle>

      {round !== 0 && (
        <RoundView>
          <TouchableOpacity onPress={loadPreviousMatches}>
            <Icon name="navigate-before" />
          </TouchableOpacity>
          <RoundText>
            {round === totalRegular + 1
              ? 'QUARTAS (IDA)'
              : round === totalRegular + 2
              ? 'QUARTAS (VOLTA)'
              : round === totalRegular + 3
              ? 'SEMIFINAL'
              : round === totalRegular + 4
              ? 'FINAL'
              : round === 0
              ? ''
              : `${round}ª RODADA`}
          </RoundText>
          <TouchableOpacity onPress={loadNextMatches}>
            <Icon name="navigate-next" />
          </TouchableOpacity>
        </RoundView>
      )}
      {matches.map((match) => (
        <View key={match._id}>
          <Suspense fallback={<Text>...</Text>}>
            <Match match={match} />
          </Suspense>
        </View>
      ))}
    </Category>
  );
};

export default Matches;
