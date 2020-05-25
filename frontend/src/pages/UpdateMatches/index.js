import React, { useState, useEffect } from 'react';
import UpdateMatchesComponent from '../../components/UpdateMatchesComponent';
import api from '../../services/api';

import { CategoryContainer, CategoryTitle, CategoryResult } from './styles';

export default function UpdateMatches() {
  const [categories, setCategories] = useState([]);

  async function loadCategories() {
    const response = await api.get('/match/categories');
    setCategories(response.data);
  }

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      {categories.map((category) => (
        <CategoryContainer key={category}>
          <CategoryTitle>TORNEIO {category}</CategoryTitle>
          <CategoryResult>
            <UpdateMatchesComponent category={category} />
          </CategoryResult>
        </CategoryContainer>
      ))}
    </>
  );
}
