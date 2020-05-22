import styled from 'styled-components';

export const Container = styled.div`
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

  @media (max-width: 420px) {
    width: 100%;
    margin: 0;

    .optional {
      display: none;
    }
  }

  .react-datepicker {
    font-size: 1.3rem !important;
  }

  .react-datepicker__current-month {
    font-size: 1.5rem !important;
  }

  .react-datepicker__header {
    padding-top: 0.6rem !important;
  }

  .react-datepicker__navigation {
    top: 1.3rem !important;
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    margin: 0.5rem !important;
  }
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

export const ClassificationContainer = styled.div`
  border: 0.1rem solid var(--border);
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
  color: var(--primary);
`;

export const HeaderTable = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 0.5rem;
  border-bottom: 0.1rem solid;
  border-bottom-color: var(--border);

  margin-top: 1rem;
`;

export const HeaderTableText = styled.h3`
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: bold;
  color: var(--textColor);

  margin-left: 0.5rem;
  width: 3rem;
  text-align: center;
`;

export const TeamView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.3rem 0;
  border-bottom: 0.1rem solid;
  border-bottom-color: var(--border);

  &:hover {
    background-color: var(--lineColor);
  }
`;

export const Team = styled.div`
  display: flex;
  align-items: center;
`;

export const PositionText = styled.h3`
  font-size: 1.6rem;
  line-height: 1.8rem;
  color: var(--textColor);
  margin-right: 0.3rem;

  text-align: center;
  width: 2.5rem;
`;

export const TeamText = styled.h3`
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: 500;
  color: var(--teamTextColor);
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
  color: var(--textColor);

  margin-left: ${(props) => (props.score ? '0.5rem' : 0)};
  width: 3rem;
  text-align: center;
`;

export const MatchContainer = styled.div`
  border: 0.1rem solid var(--border);
  border-radius: 0.8rem;
  padding: 1.5rem;
`;

export const MatchTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.8rem;
  color: var(--primary);
`;

export const RoundView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-top: 3rem;

  border-top: 0.1rem solid;
  border-top-color: var(--border);
  border-bottom: 0.1rem solid;
  border-bottom-color: var(--border);
`;

export const RoundText = styled.h3`
  font-size: 2rem;
  line-height: 2.2rem;
  font-weight: bold;
  color: var(--textColor);
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

  &:hover {
    background-color: var(--lineColor);
  }
`;

export const DateView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 0.5rem;

  input {
    width: 8rem;
    height: 2.5rem;
    color: var(--textColor);
    border: 0.1rem solid var(--border);
    border-radius: 0.8rem;
    padding: 0 0.4rem;

    text-align: center;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.6rem;

    ~ div {
      display: none;
    }

    &:focus,
    &:hover {
      border: 0.15rem solid var(--primary);
    }

    &:checked ~ label {
      display: none;
    }

    &:checked ~ div {
      display: block;
    }
  }
`;

export const DateText = styled.h4`
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: var(--textColor);
`;

export const MatchView = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 1.5rem 0;

  border-bottom: 0.1rem solid;
  border-bottom-color: var(--border);
`;

export const MatchTeamText = styled.h3`
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: 500;
  color: var(--teamTextColor);
  width: ${(props) => (props.team ? '15rem' : '1rem')};
  text-align: ${(props) => props.align || 'center'};
  color: var(--teamTextColor);

  @media (max-width: 420px) {
    width: fit-content;
  }
`;

export const MatchScoreText = styled.h3`
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: bold;
  color: var(--teamTextColor);
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
  background: var(--primary);
  border: 0;
  border-radius: 0.8rem;
  color: var(--buttonText);
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
  background-color: transparent;
`;

export const InputScore = styled.input`
  width: 3rem;
  height: 3rem;
  color: var(--teamTextColor);
  border: 0.1rem solid var(--border);
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
    border: 0.15rem solid var(--primary);
  }
`;

export const Loading = styled.div`
  display: flex;
  flex: 1;
  padding: 5rem;
  justify-content: center;
  align-items: center;
`;
