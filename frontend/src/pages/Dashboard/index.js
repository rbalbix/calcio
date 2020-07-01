import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import Top4 from '../../components/Top4';

import api from '../../services/api';

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
  const [categories, setCategories] = useState([]);
  const [champ, setChamp] = useState('');

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/category/distinct');
      setCategories(response.data);
    }
    loadCategories();
  }, []);

  useEffect(() => {
    async function loadCurrentChamp() {
      const response = await api.get('/champ/current');
      setChamp(response.data);
    }

    loadCurrentChamp();
  }, []);

  return (
    <Container>
      <DashboardTitle>Painel de Controle</DashboardTitle>
      <ChampTitle>{champ.name}</ChampTitle>
      <Cards>
        {categories.length > 0 ? (
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
