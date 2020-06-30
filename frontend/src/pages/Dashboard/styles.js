import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--container-color-dark);
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;
`;
Container.displayName = 'Container';

export const DashboardTitle = styled.h1`
  font-size: 4rem;
  color: var(--container-color-light);
  margin-bottom: 1rem;
`;
DashboardTitle.displayName = 'DashboardTitle';

export const ChampTitle = styled.h2`
  font-size: 3rem;
  color: var(--text-color);
  margin-bottom: 1rem;
`;

export const Cards = styled.div`
  background-color: var(--container-color-light);

  max-width: 800px;

  padding: 1.5rem;
  border-radius: 0.6rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-items: center;
  align-items: center;
  gap: 1.5rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--container-color-light);
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.35rem;
  opacity: 0.8;
  transition: opacity 0.2s;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

  &:hover {
    transform: translateY(-2px);
    opacity: 1;
    cursor: pointer;
  }
`;

export const CardHeader = styled.div`
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);

  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-color);
`;

export const CardBody = styled.div`
  min-height: 1px;
  padding: 1rem;
`;
