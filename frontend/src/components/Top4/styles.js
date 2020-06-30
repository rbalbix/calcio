import styled from 'styled-components';

export const Top4Container = styled.div`
  background-color: var(--container-color-light);
  padding: 0.8rem;
  border: 0.1rem solid var(--border-color);
  border-radius: 0.6rem;
`;

export const CategoryTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 100;
  color: var(--primary-color);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 0.1rem solid;
  border-bottom-color: var(--border-color);
`;

export const HeaderTable = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HeaderTableText = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  color: var(--text-color);
  width: 2.1rem;
  margin-left: 0.15rem;
`;

export const TeamView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.4rem;
  padding-bottom: 0.6rem;
  border-bottom: 0.1rem solid;
  border-bottom-color: var(--border-color);
`;

export const Team = styled.div`
  display: flex;
  align-items: center;

  margin-right: 1rem;
`;

export const PositionText = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-color);
  padding-right: 0.5rem;
`;

export const TeamShield = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const TeamText = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--team-text-color);
  padding-left: 0.5rem;
`;

export const Score = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ScoreText = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: var(--team-text-color);
  width: 2.1rem;
  margin-left: ${(props) => (props.score ? 0.15 : 0)}rem;
`;
