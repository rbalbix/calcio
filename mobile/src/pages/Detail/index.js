import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';

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
  DateView,
  DateText,
  MatchView,
  MatchTeamText,
  MatchScoreText,
  MatchTeamShield,
} from './styles';

export default function Detail() {
  const [round, setRound] = useState(1);
  const [rank, setRank] = useState([]);
  const [matches, setMatches] = useState([]);

  const route = useRoute();
  const info = route.params.info;

  async function loadRank() {
    const response = await api.get('/rank', {
      params: { category: info.category },
    });

    setRank(response.data);
  }

  async function loadMatches() {
    const response = await api.get('/match', {
      params: { category: info.category },
    });
    setMatches(response.data);
  }

  async function loadPreviousMatches() {
    console.log('previous', round - 1);
    setRound(round - 1);
  }

  async function loadNextMatches() {
    console.log('next', round + 1);
    setRound(round + 1);
  }

  useEffect(() => {
    loadRank();
    loadMatches();
  }, []);

  return (
    <Container>
      <Category>
        <CategoryTitle>TORNEIO {info.category} - TABELA</CategoryTitle>

        <HeaderTable>
          <HeaderTableText>P</HeaderTableText>
          <HeaderTableText>J</HeaderTableText>
          <HeaderTableText>V</HeaderTableText>
          <HeaderTableText>E</HeaderTableText>
          <HeaderTableText>D</HeaderTableText>
          <HeaderTableText>SG</HeaderTableText>
        </HeaderTable>

        {rank.map((item, index) => (
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
              <ScoreText score>{item.goalDifference}</ScoreText>
            </Score>
          </TeamView>
        ))}
      </Category>

      <Category>
        <CategoryTitle>JOGOS</CategoryTitle>
        <RoundView>
          <TouchableOpacity onPress={loadPreviousMatches}>
            <MaterialIcons name='navigate-before' size={24} color='#1e7a0e' />
          </TouchableOpacity>
          <RoundText>1ª RODADA</RoundText>
          <TouchableOpacity onPress={loadNextMatches}>
            <MaterialIcons name='navigate-next' size={24} color='#1e7a0e' />
          </TouchableOpacity>
        </RoundView>

        {matches.map((match) => (
          <View key={match._id}>
            <DateView>
              <DateText>{match.weekDay}</DateText>
              <DateText margin>
                {Intl.DateTimeFormat('pt-BR', {
                  month: '2-digit',
                  day: '2-digit',
                }).format(new Date(match.day))}
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
        ))}
      </Category>
    </Container>
  );
}
