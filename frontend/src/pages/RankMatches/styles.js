import styled from 'styled-components';
import { MdArrowBack } from 'react-icons/md';

export const CategoryContainer = styled.div`
  background-color: var(--container-color-light);
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

export const CategoryTitleView = styled.div`
  display: flex;
`;

export const IconArrowBack = styled(MdArrowBack)`
  font-size: 2.6rem;
  color: var(--button-text-color);
`;

export const Back = styled.div`
  background-color: var(--primary-color);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-left: 0.5rem;
  margin-right: 1rem;

  opacity: 0.8;
  transition: opacity 0.2s;
  color: var(--container-color-light);

  &:hover {
    transform: translateY(-2px);
    opacity: 1;
    transition: opacity 0.2s;
    cursor: pointer;
  }
`;

export const CategoryTitle = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: var(--primary-color);
`;

export const CategoryResult = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 0.5rem;

  margin-top: 0.5rem;

  @media (max-width: 420px) {
    grid-template-columns: none;
  }
`;
