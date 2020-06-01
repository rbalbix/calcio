import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import {
  Top4Container,
  CategoryTitle,
  Header,
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
  const [rank, setRank] = useState([]);

  async function loadRank() {
    const response = await api.get('/rank/top');

    setRank(response.data[category]);
  }

  useEffect(() => {
    loadRank();
    // eslint-disable-next-line
  }, []);

  return (
    <Top4Container>
      <Header>
        <CategoryTitle>TORNEIO {category}</CategoryTitle>
        <HeaderTable>
          <HeaderTableText>P</HeaderTableText>
          <HeaderTableText>V</HeaderTableText>
          <HeaderTableText>E</HeaderTableText>
          <HeaderTableText>D</HeaderTableText>
          <HeaderTableText>SG</HeaderTableText>
        </HeaderTable>
      </Header>

      {rank.map((item, index) => (
        <TeamView key={item._id}>
          <Team>
            <PositionText>{index + 1}</PositionText>
            <TeamShield src={item.team.thumbnail_url} />

            <TeamText>{item.team.shortName}</TeamText>
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
    </Top4Container>
  );
}
