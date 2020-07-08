import React from 'react';
import { TouchableOpacity } from 'react-native';

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

export default function Top4({ rank, navigateToDetail }) {
  return (
    <>
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
