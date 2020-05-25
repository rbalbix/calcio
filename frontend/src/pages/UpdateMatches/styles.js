import styled from 'styled-components';

export const CategoryContainer = styled.div`
  background-color: var(--bgContainer);
  width: 95%;
  max-width: 1200px;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
`;

export const CategoryTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: 500;
  line-height: 4.2rem;
  color: var(--primary);
`;

export const CategoryResult = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 0.5rem;

  margin-top: 1rem;

  @media (max-width: 420px) {
    grid-template-columns: none;
  }
`;
