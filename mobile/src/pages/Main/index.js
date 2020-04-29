import React, { useState, useEffect, useCallback } from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import {
  Container,
  Category,
  CategoryTitle,
  HeaderTable,
  HeaderTableText,
  Loading,
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
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    loadRanks();

    setRefreshing(false);
  }, [refreshing]);

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

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {loading ? (
        <TeamView>
          <Loading>
            <ActivityIndicator size='large' color='#1e7a0e' />
          </Loading>
        </TeamView>
      ) : (
        ranks.map((rank, index) => (
          <Category key={index}>
            <TouchableOpacity
              onPress={() => {
                navigateToDetail({ category: `${rank[0].category}` });
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
                  <TeamShield source={{ uri: item.team.thumbnail_url }} />
                  <TeamText>{item.team.longName}</TeamText>
                </Team>

                <Score>
                  <ScoreText>{item.points}</ScoreText>
                  <ScoreText score>{item.wons}</ScoreText>
                  <ScoreText score>{item.goalDifference}</ScoreText>
                </Score>
              </TeamView>
            ))}
          </Category>
        ))
      )}
    </Container>
  );
}
