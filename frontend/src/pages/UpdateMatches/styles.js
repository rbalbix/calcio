import styled from 'styled-components';
import * as theme from '../../styles/variables';

export const Container = styled.div`
  background-color: ${theme.bgContainer};
  width: 95%;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
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
  color: ${theme.primary};
`;

export const CategoryResult = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;

export const ClassificationContainer = styled.div`
  border: 0.1rem solid ${theme.border};
  border-radius: 0.8rem;
  padding: 1rem;
  margin-right: 0.5rem;

  flex: 1;
`;

export const ClassificationTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.8rem;
  color: ${theme.primary};
`;

export const HeaderTable = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 0.5rem;
  border-bottom: 0.1rem solid;
  border-bottom-color: ${theme.border};
`;

export const HeaderTableText = styled.h3`
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-weight: 500;
  color: ${theme.textColor};
`;

export const TeamView = styled.div`
  /* background-color: #ff0; */
  display: flex;
  justify-content: space-between;
  margin-top: 0.2rem;

  padding-bottom: 0.3rem;
  border-bottom: 0.1rem solid;
  border-bottom-color: ${theme.border};
`;

export const Team = styled.div`
  /* background-color: #00cc00; */
  display: flex;
  align-items: center;
`;

export const PositionText = styled.h3`
  font-size: 1.6rem;
  line-height: 1.8rem;
  color: ${theme.textColor};
  padding-right: 0.2rem;
`;

export const TeamText = styled.h3`
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-weight: bold;
  color: ${theme.teamTextColor};
`;

export const TeamShield = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.2rem;
`;

export const Score = styled.div`
  /* background-color: #ff0000; */
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const ScoreText = styled.h3`
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-weight: bold;
  color: ${theme.textColor};
  margin-left: ${(props) => (props.score ? '0.2rem' : 0)};
`;

export const MatchContainer = styled.div`
  border: 0.1rem solid ${theme.border};
  border-radius: 0.8rem;
  padding: 1rem;

  display: flex;
  flex: 1;
`;
