import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {
  Container,
  DashboardTitle,
  Cards,
  Card,
  CardHeader,
  CardBody,
  CardText,
} from './styles';

export default function Dashboard() {
  const [categories, setCategories] = useState([]);

  async function loadCategories() {
    const response = await api.get('/match/categories');
    setCategories(response.data);
  }

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <Container>
      <DashboardTitle>Painel de Controle</DashboardTitle>
      <Cards>
        {categories.map((category) => (
          <Link
            style={{ textDecoration: 'none' }}
            key={category}
            to={{
              pathname: '/rank',
              query: { category },
              state: { category },
            }}
          >
            <Card>
              <CardHeader>TABELA E JOGOS</CardHeader>
              <CardBody>
                <CardText>TORNEIO {category}</CardText>
              </CardBody>
            </Card>
          </Link>
        ))}
      </Cards>
    </Container>
  );
}
