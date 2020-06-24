import React from 'react';
import ReactLoading from 'react-loading';

import {
  MatchTitleView,
  MatchTitle,
} from './styles';

const MatchHeader = ({ loadingMatches }) => {
  return (
    <MatchTitleView>
      <MatchTitle>JOGOS</MatchTitle>
      <MatchTitle>
        {loadingMatches ? (
          <ReactLoading
            type="spokes"
            color="#1E7A0E"
            height="2rem"
            width="2rem"
          />
        ) : (
            ''
          )}
      </MatchTitle>
    </MatchTitleView>)
}

export default MatchHeader;
