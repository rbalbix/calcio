import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import {
  Container,
  Category,
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

export default function Main() {
  const [ranks, setRanks] = useState([]);
  const navigation = useNavigation();

  function navigateToCategory(info) {
    navigation.navigate('Category', { info });
  }

  async function loadRanks() {
    const response = await api.get('/rank/top');

    setRanks([response.data.A, response.data.B]);
  }

  useEffect(() => {
    loadRanks();
  }, []);

  return (
    <Container>
      {ranks.map((rank, index) => (
        <Category key={index}>
          <TouchableOpacity
            onPress={() => {
              navigateToCategory({ category: `${rank[0].category}` });
            }}
          >
            <CategoryTitle>TORNEIO {rank[0].category}</CategoryTitle>
          </TouchableOpacity>

          <HeaderTable>
            <HeaderTableText>P</HeaderTableText>
            <HeaderTableText>V</HeaderTableText>
            <HeaderTableText>SG</HeaderTableText>
          </HeaderTable>

          {rank.map((item, index) => (
            <TeamView key={item._id}>
              <Team>
                <PositionText>{index + 1}</PositionText>
                <TeamShield source={{ uri: item.thumbnail_url }} />
                <TeamText>{item.team}</TeamText>
              </Team>

              <Score>
                <ScoreText>{item.points}</ScoreText>
                <ScoreText score>{item.wons}</ScoreText>
                <ScoreText score>{item.goalDifference}</ScoreText>
              </Score>
            </TeamView>
          ))}
        </Category>
      ))}
    </Container>
  );
}
