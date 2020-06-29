import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from 'react';

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
        <HeaderTableText>P</HeaderTableText>
        <HeaderTableText>J</HeaderTableText>
        <HeaderTableText>V</HeaderTableText>
        <HeaderTableText>E</HeaderTableText>
        <HeaderTableText>D</HeaderTableText>
        <HeaderTableText className="optional">GP</HeaderTableText>
        <HeaderTableText className="optional">GC</HeaderTableText>
        <HeaderTableText>SG</HeaderTableText>
        <HeaderTableText className="optional">%</HeaderTableText>
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
