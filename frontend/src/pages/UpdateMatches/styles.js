import styled from 'styled-components';
import * as theme from '../../styles/variables';

export const Container = styled.div`
  background-color: ${theme.bgContainer};
  width: 95%;
  max-width: 1200px;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

  @media (max-width: 420px) {
    width: 100%;
    margin: 0;

    .optional {
      display: none;
    }
  }
`;

export const CategoryTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: 500;
  line-height: 4.2rem;
  color: ${theme.primary};
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

export const ClassificationContainer = styled.div`
  border: 0.1rem solid ${theme.border};
  border-radius: 0.8rem;
  padding: 1.5rem;

  @media (max-width: 420px) {
    padding: 0.5rem;
  }
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

  margin-top: 1rem;
`;

export const HeaderTableText = styled.h3`
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: bold;
  color: ${theme.textColor};

  margin-left: 0.5rem;
  width: 3rem;
  text-align: center;
`;

export const TeamView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;

  padding-bottom: 1rem;
  border-bottom: 0.1rem solid;
  border-bottom-color: ${theme.border};
`;

export const Team = styled.div`
  display: flex;
  align-items: center;
`;

export const PositionText = styled.h3`
  font-size: 1.6rem;
  line-height: 1.8rem;
  color: ${theme.textColor};
  margin-right: 0.3rem;

  text-align: center;
  width: 2.5rem;
`;

export const TeamText = styled.h3`
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: 500;
  color: ${theme.teamTextColor};
`;

export const TeamShield = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
`;

export const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ScoreText = styled.h3`
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: 500;
  color: ${theme.textColor};

  margin-left: ${(props) => (props.score ? '0.5rem' : 0)};
  width: 3rem;
  text-align: center;
`;

export const MatchContainer = styled.div`
  border: 0.1rem solid ${theme.border};
  border-radius: 0.8rem;
  padding: 1.5rem;
`;

export const MatchTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.8rem;
  color: ${theme.primary};
`;

export const RoundView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin: 3rem 0 0.8rem 0;

  border-top: 0.1rem solid;
  border-top-color: ${theme.border};
  border-bottom: 0.1rem solid;
  border-bottom-color: ${theme.border};
`;

export const RoundText = styled.h3`
  font-size: 2rem;
  line-height: 2.2rem;
  font-weight: bold;
  color: ${theme.textColor};
`;

export const Matches = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Match = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DateView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DateText = styled.h4`
  font-size: 1.4rem;
  line-height: 1.6rem;
  margin-left: ${(props) => (props.margin ? '1rem' : 0)};
  color: ${theme.textColor};
`;

export const MatchView = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 1.2rem 0;

  border-bottom: 0.1rem solid;
  border-bottom-color: ${theme.border};

  margin-bottom: 0.8rem;
`;

export const MatchTeamText = styled.h3`
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: 500;
  color: ${theme.teamTextColor};
  width: ${(props) => (props.team ? '15rem' : '1rem')};
  text-align: ${(props) => props.align || 'center'};
  color: ${theme.teamTextColor};

  @media (max-width: 420px) {
    width: fit-content;
  }
`;

export const MatchScoreText = styled.h3`
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: bold;
  color: ${theme.teamTextColor};
  width: 3rem;
  text-align: center;
`;

export const MatchTeamShield = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 5rem;
  background: ${theme.primary};
  border: 0;
  border-radius: 0.8rem;
  color: ${theme.buttonText};
  font-weight: bold;
  margin-top: 1rem;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 1.8rem;
  line-height: 2rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;

export const PrevNextRound = styled.button`
  border: 0;
  text-decoration: none;
`;

export const InputScore = styled.input`
  width: 3rem;
  height: 3rem;
  color: ${theme.teamTextColor};
  border: 0.1rem solid ${theme.border};
  border-radius: 0.8rem;
  padding: 0 0.4rem;

  text-align: center;
  font-size: 1.4rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:focus,
  &:hover {
    border: 0.15rem solid ${theme.primary};
  }
`;

export const Loading = styled.div`
  display: flex;
  flex: 1;
  height: 40rem;
  justify-content: center;
  align-items: center;
`;
