import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import Rank from '../../components/Rank';
import Matches from '../../components/Matches';

import {
  CategoryContainer,
  CategoryTitleView,
  Back,
  CategoryTitle,
  CategoryResult,
} from './styles';

export default function RankMatches({ location }) {
  const loadRankRef = useRef();

  const category = location.query?.category || location.state?.category;

  function loadRank() {
    loadRankRef.current.loadRankRef();
  }

  return (
    <CategoryContainer>
      <CategoryTitleView>
        <Link style={{ textDecoration: 'none' }} to="/">
          <Back>
            <MdArrowBack size={26} />
          </Back>
        </Link>
        <CategoryTitle>TORNEIO {category}</CategoryTitle>
      </CategoryTitleView>
      <CategoryResult>
        <Rank ref={loadRankRef} category={category} />
        <Matches loadRank={loadRank} category={category} />
      </CategoryResult>
    </CategoryContainer>
  );
}