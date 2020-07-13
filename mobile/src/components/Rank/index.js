import React, {
  useState,
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { ActivityIndicator } from 'react-native';

import api from '../../services/api';
import { subscribeToNews } from '../../services/socket';

import {
  Category,
  CategoryTitle,
  HeaderTable,
  HeaderTableText,
  TeamView,
  Team,
  TeamText,
  PositionText,
  TeamShield,
  Score,
  ScoreText,
  Loading,
} from './styles';

const Rank = forwardRef(({ info }, ref) => {
  const [rank, setRank] = useState([]);
  const [loading, setLoading] = useState(true);

  const rankList = useCallback(async () => {
    const response = await api.get('/rank', {
      params: { category: info.category },
    });
    setRank(response.data);
  }, [rank]);

  function loadRank() {
    setLoading(true);
    rankList();
    setLoading(false);
  }

  useImperativeHandle(ref, () => ({
    rankListRef() {
      rankList();
    },
  }));

  useEffect(() => {
    loadRank();
  }, []);

  useEffect(() => {
    subscribeToNews((data) => rankList());
  }, []);

  return (
    <Category>
      <CategoryTitle>TORNEIO {info.category} - TABELA</CategoryTitle>

      <HeaderTable>
        <HeaderTableText>P</HeaderTableText>
        <HeaderTableText>J</HeaderTableText>
        <HeaderTableText>V</HeaderTableText>
        <HeaderTableText>E</HeaderTableText>
        <HeaderTableText>D</HeaderTableText>
        <HeaderTableText>GP</HeaderTableText>
        <HeaderTableText>GC</HeaderTableText>
        <HeaderTableText>SG</HeaderTableText>
      </HeaderTable>

      {loading ? (
        <TeamView>
          <Loading>
            <ActivityIndicator size="large" color="#1e7a0e" />
          </Loading>
        </TeamView>
      ) : (
        rank.map((item, index) => (
          <TeamView key={item._id}>
            <Team>
              <PositionText>{index + 1}</PositionText>
              <TeamShield
                source={{
                  uri: item.team.thumbnail_url,
                }}
              />
              <TeamText>{item.team.shortName}</TeamText>
            </Team>
            <Score>
              <ScoreText>{item.points}</ScoreText>
              <ScoreText score>{item.played}</ScoreText>
              <ScoreText score>{item.wons}</ScoreText>
              <ScoreText score>{item.drawn}</ScoreText>
              <ScoreText score>{item.lost}</ScoreText>
              <ScoreText score>{item.goalsFor}</ScoreText>
              <ScoreText score>{item.goalsAgainst}</ScoreText>
              <ScoreText score>{item.goalDifference}</ScoreText>
            </Score>
          </TeamView>
        ))
      )}
    </Category>
  );
});

export default Rank;
