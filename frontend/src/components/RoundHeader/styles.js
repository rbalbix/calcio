import styled from 'styled-components';

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

export const PrevNextRound = styled.button`
  border: 0;
  text-decoration: none;
  background-color: transparent;
`;
