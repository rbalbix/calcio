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
  const [rankA, setRankA] = useState([]);
  const [rankB, setRankB] = useState([]);
  const navigation = useNavigation();

  function navigateToCategory(category) {
    navigation.navigate('Category', { category });
  }

  async function loadRanks() {
    const response = await api.get('/rank/top');

    setRankA(response.data.A);
    setRankB(response.data.B);
  }

  useEffect(() => {
    loadRanks();
  }, []);

  return (
    <Container>
      <Category>
        <TouchableOpacity
          onPress={() => {
            navigateToCategory({ category: 'A' });
          }}
        >
          <CategoryTitle>TORNEIO A</CategoryTitle>
        </TouchableOpacity>

        <HeaderTable>
          <HeaderTableText>P</HeaderTableText>
          <HeaderTableText>V</HeaderTableText>
          <HeaderTableText>SG</HeaderTableText>
        </HeaderTable>

        {rankA.map((rank, index) => (
          <TeamView key={rank._id}>
            <Team>
              <PositionText>{index + 1}</PositionText>
              <TeamShield source={{ uri: rank.thumbnail_url }} />
              <TeamText>{rank.team}</TeamText>
            </Team>
            <Score>
              <ScoreText>{rank.points}</ScoreText>
              <ScoreText>{rank.wons}</ScoreText>
              <ScoreText>{rank.goalDifference}</ScoreText>
            </Score>
          </TeamView>
        ))}
      </Category>

      <Category>
        <TouchableOpacity
          onPress={() => {
            navigateToCategory({ category: 'B' });
          }}
        >
          <CategoryTitle>TORNEIO B</CategoryTitle>
        </TouchableOpacity>

        <HeaderTable>
          <HeaderTableText>P</HeaderTableText>
          <HeaderTableText>V</HeaderTableText>
          <HeaderTableText>SG</HeaderTableText>
        </HeaderTable>

        {rankB.map((rank, index) => (
          <TeamView key={rank._id}>
            <Team>
              <PositionText>{index + 1}</PositionText>
              <TeamShield source={{ uri: rank.thumbnail_url }} />
              <TeamText>{rank.team}</TeamText>
            </Team>
            <Score>
              <ScoreText>{rank.points}</ScoreText>
              <ScoreText>{rank.wons}</ScoreText>
              <ScoreText>{rank.goalDifference}</ScoreText>
            </Score>
          </TeamView>
        ))}
      </Category>
    </Container>
  );
}
