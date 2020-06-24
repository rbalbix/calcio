import styled from 'styled-components';

export const MatchContainer = styled.div`
  border: 0.1rem solid var(--border);
  border-radius: 0.8rem;
  padding: 1.5rem;

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

export const MatchTitleView = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
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
  margin-top: 1.2rem;

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

export const MatchesView = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
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
