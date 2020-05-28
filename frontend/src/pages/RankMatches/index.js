import React, { useRef } from 'react';

import Rank from '../../components/Rank';
import Matches from '../../components/Matches';

import { CategoryContainer, CategoryTitle, CategoryResult } from './styles';

export default function RankMatches() {
  const loadRankRef = useRef();

  function loadRank() {
    loadRankRef.current.loadRankRef();
  }

  return (
    <CategoryContainer>
      <CategoryTitle>TORNEIO A</CategoryTitle>
      <CategoryResult>
        <Rank ref={loadRankRef} category="A" />
        <Matches loadRank={loadRank} category="A" />
      </CategoryResult>
    </CategoryContainer>
  );
}
