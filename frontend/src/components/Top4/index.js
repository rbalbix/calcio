import React from 'react';
import useFetch from '../../hooks/useFetch';
import SuspenseLoading from '../../components/SuspenseLoading';

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
  const { data, error } = useFetch('/rank/top');

  if (error) return <div>{`Erro ao carregar: ${error}`}</div>;

  if (!data) {
    return <SuspenseLoading />;
  }

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

      {data[category].map((item, index) => (
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
