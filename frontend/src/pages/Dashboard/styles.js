import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--bgContainerDark);
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;
`;

export const DashboardTitle = styled.h1`
  color: var(--bgContainer);
  margin-bottom: 1rem;
`;

export const Cards = styled.div`
  background-color: var(--bgContainer);

  width: 90%;
  max-width: 800px;

  padding: 1.5rem;
  border-radius: 0.6rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
`;

export const Card = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  height: 18rem;
  word-wrap: break-word;
  background-color: var(--bgContainer);
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
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

  font-size: 1.8rem;
  font-weight: bold;
  color: var(--primary);
`;

export const CardBody = styled.div`
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

export const CardText = styled.h3`
  font-size: 1.6rem;
  line-height: 1.8;
  color: #333333;
`;
