import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from 'react';

import { CustomTooltip } from '../CustomTooltip';
import Loading from '../Loading';
import api from '../../services/api';

import {
  ClassificationContainer,
  ClassificationTitleView,
  ClassificationTitle,
  HeaderTable,
  HeaderTableText,
  TeamView,
  Team,
  TeamText,
  PositionText,
  TeamShield,
  Score,
  ScoreText,
} from './styles';

const Rank = forwardRef((props, ref) => {
  const { category } = props;
  const [rank, setRank] = useState([]);
  const [loadingRank, setLoadingRank] = useState(false);

  useImperativeHandle(ref, () => ({
    loadRankRef() {
      loadRank();
    },
  }));

  async function loadRank() {
    setLoadingRank(true);

    const response = await api.get('/rank', {
      params: { category },
    });

    setLoadingRank(false);
    setRank(response.data);
  }

  useEffect(() => {
    loadRank();
    // eslint-disable-next-line
  }, []);

  return (
    <ClassificationContainer>
      <ClassificationTitleView>
        <ClassificationTitle>CLASSIFICAÇÃO</ClassificationTitle>
        <ClassificationTitle>
          <Loading loading={loadingRank} />
        </ClassificationTitle>
      </ClassificationTitleView>

      <HeaderTable>
        <CustomTooltip title="Pontos">
          <HeaderTableText>P</HeaderTableText>
        </CustomTooltip>
        <CustomTooltip title="Jogos">
          <HeaderTableText>J</HeaderTableText>
        </CustomTooltip>
        <CustomTooltip title="Vitórias">
          <HeaderTableText>V</HeaderTableText>
        </CustomTooltip>
        <CustomTooltip title="Empates">
          <HeaderTableText>E</HeaderTableText>
        </CustomTooltip>
        <CustomTooltip title="Derrotas">
          <HeaderTableText>D</HeaderTableText>
        </CustomTooltip>
        <CustomTooltip title="Gols pró">
          <HeaderTableText className="optional">GP</HeaderTableText>
        </CustomTooltip>
        <CustomTooltip title="Gols contra">
          <HeaderTableText className="optional">GC</HeaderTableText>
        </CustomTooltip>
        <CustomTooltip title="Saldo de gols">
          <HeaderTableText>SG</HeaderTableText>
        </CustomTooltip>
        <CustomTooltip title="Aproveitamento">
          <HeaderTableText className="optional">%</HeaderTableText>
        </CustomTooltip>
      </HeaderTable>

      {rank.map((item, index) => (
        <TeamView key={item._id}>
          <Team>
            <PositionText>{index + 1}</PositionText>
            <TeamShield src={item.team.thumbnail_url} />
            <TeamText>{item.team.longName}</TeamText>
          </Team>
          <Score>
            <ScoreText>{item.points}</ScoreText>
            <ScoreText score>{item.played}</ScoreText>
            <ScoreText score>{item.wons}</ScoreText>
            <ScoreText score>{item.drawn}</ScoreText>
            <ScoreText score>{item.lost}</ScoreText>
            <ScoreText score className="optional">
              {item.goalsFor}
            </ScoreText>
            <ScoreText score className="optional">
              {item.goalsAgainst}
            </ScoreText>
            <ScoreText score>{item.goalDifference}</ScoreText>
            <ScoreText score className="optional">
              {item.performance}
            </ScoreText>
          </Score>
        </TeamView>
      ))}
    </ClassificationContainer>
  );
});

export default Rank;
