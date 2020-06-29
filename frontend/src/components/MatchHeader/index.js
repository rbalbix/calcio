import React from 'react';
import Loading from '../Loading';

import { MatchTitleView, MatchTitle } from './styles';

const MatchHeader = ({ loading }) => {
  return (
    <MatchTitleView>
      <MatchTitle>JOGOS</MatchTitle>
      <MatchTitle>
        <Loading loading={loading} />
      </MatchTitle>
    </MatchTitleView>
  );
};

export default MatchHeader;
