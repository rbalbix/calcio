import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import Top4 from '../../components/Top4';
import SuspenseLoading from '../../components/SuspenseLoading';

import useFetch from '../../hooks/useFetch';

import {
  Container,
  DashboardTitle,
  ChampTitle,
  Cards,
  Card,
  CardHeader,
  CardBody,
} from './styles';

export default function Dashboard() {
  const { data: categories, error: catErr } = useFetch('/category/distinct');
  const { data: champ, error: champErr } = useFetch('/champ/current');

  if ((!categories || !champ) && !catErr && !champErr) {
    return <SuspenseLoading />;
  }

  return (
    <Container>
      <DashboardTitle>Painel de Controle</DashboardTitle>
      <ChampTitle>{!catErr && !champErr && champ.name}</ChampTitle>
      <Cards>
        {!catErr && categories.length > 0 ? (
          categories.map((category) => (
            <Card key={category} draggable="true">
              <Link
                style={{ textDecoration: 'none' }}
                key={category}
                to={{
                  pathname: '/rank',
                  query: { category },
                  state: { category },
                }}
              >
                <CardHeader>TABELA E JOGOS</CardHeader>
                <CardBody>
                  <Top4 category={category} />
                </CardBody>
              </Link>
            </Card>
          ))
        ) : (
          <Card>
            <CardHeader>
              <Skeleton width={250} />
            </CardHeader>
            <CardBody>
              <Skeleton width={250} />
            </CardBody>
            <CardBody>
              <Skeleton width={250} />
            </CardBody>
            <CardBody>
              <Skeleton width={250} />
            </CardBody>
            <CardBody>
              <Skeleton width={250} />
            </CardBody>
          </Card>
        )}
      </Cards>
    </Container>
  );
}
