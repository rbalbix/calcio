import React, { Suspense, lazy, useRef } from 'react';
import { Link } from 'react-router-dom';
import SuspenseLoading from '../../components/SuspenseLoading';
import {
  CategoryContainer,
  CategoryTitleView,
  IconArrowBack,
  Back,
  CategoryTitle,
  CategoryResult,
} from './styles';

const Rank = lazy(() => import('../../components/Rank'));
const Matches = lazy(() => import('../../components/Matches'));

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
            <IconArrowBack />
          </Back>
        </Link>
        <CategoryTitle>TORNEIO {category}</CategoryTitle>
      </CategoryTitleView>
      <CategoryResult>
        <Suspense fallback={<SuspenseLoading />}>
          <Rank ref={loadRankRef} category={category} />
          <Matches loadRank={loadRank} category={category} />
        </Suspense>
      </CategoryResult>
    </CategoryContainer>
  );
}
