import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import api from '../../services/api';
import { connect, disconnect, subscribeToNews } from '../../services/socket';

import {
  CategoryTitle,
  HeaderTable,
  HeaderTableText,
  TeamView,
  Team,
  PositionText,
  TeamShield,
  TeamText,
  Score,
  ScoreText,
} from './styles';

export default function Top4({ category }) {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [rank, setRank] = useState([]);

  function navigateToDetail() {
    navigation.navigate('Category', { info: { category } });
  }

  function setupWebSocket() {
    disconnect();
    connect();
  }

  async function loadRank() {
    if (isFocused) {
      const response = await api.get('/rank/top', {
        params: { category },
      });
      setRank(response.data);
    }
  }

  useEffect(() => {
    if (isFocused) {
      setupWebSocket();
    }
    return () => {
      disconnect();
    };
  }, [isFocused]);

  useEffect(() => {
    subscribeToNews(() => loadRank());
  }, []);

  useEffect(() => {
    loadRank();
  }, []);

  return (
    <>
      <TouchableOpacity onPress={() => navigateToDetail()}>
        <CategoryTitle>TORNEIO {category}</CategoryTitle>
      </TouchableOpacity>

      <HeaderTable>
        <HeaderTableText>P</HeaderTableText>
        <HeaderTableText>V</HeaderTableText>
        <HeaderTableText>E</HeaderTableText>
        <HeaderTableText>D</HeaderTableText>
        <HeaderTableText>SG</HeaderTableText>
      </HeaderTable>

      {rank.map((item, index) => (
        <TeamView key={item._id}>
          <Team>
            <PositionText>{index + 1}</PositionText>
            <TeamShield source={{ uri: item.team.thumbnail_url }} />
            <TeamText>{item.team.longName}</TeamText>
          </Team>

          <Score>
            <ScoreText>{item.points}</ScoreText>
            <ScoreText score>{item.wons}</ScoreText>
            <ScoreText score>{item.drawn}</ScoreText>
            <ScoreText score>{item.lost}</ScoreText>
            <ScoreText score>{item.goalDifference}</ScoreText>
          </Score>
        </TeamView>
      ))}
    </>
  );
}
