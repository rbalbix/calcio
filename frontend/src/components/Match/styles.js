import styled from 'styled-components';

export const MatchGlobalView = styled.div`
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
    height: 2rem;
    color: var(--textColor);
    border: 0.1rem solid var(--border);
    border-radius: 0.4rem;
    padding: 0 0.4rem;

    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
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
  font-size: 1.5rem;
  line-height: 2rem;
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

  display: ${(props) => (props.long === 'true' ? 'block' : 'none')};

  @media (max-width: 420px) {
    width: ${(props) => (props.team ? '6rem' : '1rem')};
    display: ${(props) => (props.long === 'true' ? 'none' : 'block')};
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

export const MatchPenaltyText = styled.h3`
  font-size: 1.3rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: var(--textColor);
  text-align: center;
`;

export const MatchTeamShield = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const InputView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const InputPenalty = styled.input`
  display: none;
  width: 2.5rem;
  height: 2.5rem;
  color: var(--teamTextColor);
  border: 0.1rem solid var(--border);
  border-radius: 0.8rem;
  margin: 0 0.2rem;

  text-align: center;
  font-size: 1.2rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:focus,
  &:hover {
    border: 0.15rem solid var(--primary);
  }
`;
