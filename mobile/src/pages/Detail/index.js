import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
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
  MatchTeamShield,
} from './styles';

export default function Detail() {
  const [rank, setRank] = useState([]);

  const route = useRoute();
  const info = route.params.info;

  async function loadRank() {
    const response = await api.get('/rank');

    setRank(response.data);
  }

  useEffect(() => {
    loadRank();
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
                  uri: item.thumbnail_url,
                }}
              />
              <MatchTeamText>{item.team}</MatchTeamText>
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
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name='navigate-before' size={24} color='#1e7a0e' />
          </TouchableOpacity>
          <RoundText>1ª RODADA</RoundText>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name='navigate-next' size={24} color='#1e7a0e' />
          </TouchableOpacity>
        </RoundView>

        <DateView>
          <DateText>20/10</DateText>
        </DateView>
        <MatchView>
          <MatchTeamText>SAM</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>25</MatchTeamText>
          <MatchTeamText>X</MatchTeamText>
          <MatchTeamText>30</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>MIL</MatchTeamText>
        </MatchView>

        <DateView>
          <DateText>20/10</DateText>
        </DateView>
        <MatchView>
          <MatchTeamText>SAM</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>2</MatchTeamText>
          <MatchTeamText>X</MatchTeamText>
          <MatchTeamText>0</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>MIL</MatchTeamText>
        </MatchView>

        <DateView>
          <DateText>20/10</DateText>
        </DateView>
        <MatchView>
          <MatchTeamText>SAM</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>2</MatchTeamText>
          <MatchTeamText>X</MatchTeamText>
          <MatchTeamText>0</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>MIL</MatchTeamText>
        </MatchView>

        <DateView>
          <DateText>20/10</DateText>
        </DateView>
        <MatchView>
          <MatchTeamText>SAM</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>2</MatchTeamText>
          <MatchTeamText>X</MatchTeamText>
          <MatchTeamText>0</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>MIL</MatchTeamText>
        </MatchView>

        <DateView>
          <DateText>20/10</DateText>
        </DateView>
        <MatchView>
          <MatchTeamText>SAM</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>2</MatchTeamText>
          <MatchTeamText>X</MatchTeamText>
          <MatchTeamText>0</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>MIL</MatchTeamText>
        </MatchView>
      </Category>
    </Container>
  );
}
