import styled from 'styled-components';

export const ClassificationContainer = styled.div`
  border: 0.1rem solid var(--border);
  border-radius: 0.8rem;
  padding: 1.5rem;

  @media (max-width: 420px) {
    padding: 0.5rem;

    width: 100%;
    margin: 0;

    .optional {
      display: none;
    }
  }
`;

export const ClassificationTitleView = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
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
