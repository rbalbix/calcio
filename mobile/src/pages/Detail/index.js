import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';

import moment from 'moment';
import api from '../../services/api';

import {
  Container,
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
  RoundView,
  RoundText,
  Loading,
  DateView,
  DateText,
  MatchView,
  MatchTeamText,
  MatchScoreText,
  MatchTeamShield,
} from './styles';

export default function Detail() {
  const [round, setRound] = useState(0);
  const [total, setTotal] = useState(0);
  const [loadingRank, setLoadingRank] = useState(true);
  const [loadingMatches, setLoadingMatches] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [rank, setRank] = useState([]);
  const [matches, setMatches] = useState([]);

  const route = useRoute();
  const info = route.params.info;

  async function loadRank() {
    setLoadingRank(true);

    const response = await api.get('/rank', {
      params: { category: info.category },
    });

    setLoadingRank(false);
    setRank(response.data);
  }

  async function loadMatches() {
    setLoadingMatches(true);

    const response = await api.get('/match', {
      params: { category: info.category, round },
    });

    setTotal(parseInt(response.headers['x-total-count']));
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
    loadMatches();
  }, []);

  useEffect(() => {
    loadMatches();
  }, [round]);

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

        {loadingRank ? (
          <TeamView>
            <Loading>
              <ActivityIndicator size='large' color='#1e7a0e' />
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

      <Category>
        <CategoryTitle>JOGOS</CategoryTitle>

        {round !== 0 && (
          <RoundView>
            <TouchableOpacity onPress={loadPreviousMatches}>
              <MaterialIcons name='navigate-before' size={30} color='#1e7a0e' />
            </TouchableOpacity>
            <RoundText>{round}ª RODADA</RoundText>
            <TouchableOpacity onPress={loadNextMatches}>
              <MaterialIcons name='navigate-next' size={30} color='#1e7a0e' />
            </TouchableOpacity>
          </RoundView>
        )}
        {loadingMatches ? (
          <Loading>
            <ActivityIndicator size='large' color='#1e7a0e' />
          </Loading>
        ) : (
          matches.map((match) => (
            <View key={match._id}>
              <DateView>
                <DateText>{match.weekDay}</DateText>
                <DateText margin>
                  {moment(match.day).utc().format('DD/MM')}
                </DateText>
              </DateView>
              <MatchView>
                <MatchTeamText team align='right'>
                  {match.teamHome.shortName}
                </MatchTeamText>
                <MatchTeamShield
                  source={{
                    uri: match.teamHome.thumbnail_url,
                  }}
                ></MatchTeamShield>
                <MatchScoreText>{match.scoreHome}</MatchScoreText>
                <MatchTeamText>X</MatchTeamText>
                <MatchScoreText>{match.scoreAway}</MatchScoreText>
                <MatchTeamShield
                  source={{
                    uri: match.teamAway.thumbnail_url,
                  }}
                ></MatchTeamShield>
                <MatchTeamText team align='left'>
                  {match.teamAway.shortName}
                </MatchTeamText>
              </MatchView>
            </View>
          ))
        )}
      </Category>
    </Container>
  );
}
