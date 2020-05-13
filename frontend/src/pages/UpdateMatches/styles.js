import styled from 'styled-components';
import * as theme from '../../styles/variables';

export const Container = styled.div`
  background-color: ${theme.bgContainer};
  width: 95%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const CategoryTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: 500;
  line-height: 4.2rem;
  color: ${theme.primary};
`;

export const CategoryResult = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ClassificationContainer = styled.div`
  border: 1px solid ${theme.border};
  border-radius: 8px;
  padding: 10px;
  margin-right: 5px;

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
  padding-bottom: 5px;
  border-bottom: 1px solid;
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
  margin-top: 2px;

  padding-bottom: 3px;
  border-bottom: 1px solid;
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
  padding-right: 2px;
`;

export const TeamText = styled.h3`
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-weight: bold;
  color: ${theme.teamTextColor};
`;

export const TeamShield = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 2px;
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
  margin-left: ${(props) => (props.score ? '2px' : '0px')};
`;

export const MatchContainer = styled.div`
  border: 1px solid ${theme.border};
  border-radius: 8px;
  padding: 10px;

  display: flex;
  flex: 1;
`;
