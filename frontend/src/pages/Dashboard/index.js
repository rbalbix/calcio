import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      const response = await api.get('/match/categories');
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
        {categories.map((category) => (
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
        ))}
      </Cards>
    </Container>
  );
}
