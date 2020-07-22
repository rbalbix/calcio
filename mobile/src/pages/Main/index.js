import React, { Suspense, lazy } from 'react';

import SuspenseLoading from '../../components/SuspenseLoading';
const Top4 = lazy(() => import('../../components/Top4'));

import useFetch from '../../hooks/useFetch';

import { Container, Category } from './styles';

export default function Main() {
  const { data } = useFetch('/category/distinct');

  if (!data) {
    return <SuspenseLoading />;
  }

  return (
    <Container>
      {data.map((category) => (
        <Category key={category}>
          <Suspense fallback={<SuspenseLoading />}>
            <Top4 category={category} />
          </Suspense>
        </Category>
      ))}
    </Container>
  );
}
