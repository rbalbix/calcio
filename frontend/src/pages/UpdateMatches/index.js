import React from 'react';
import { Link } from 'react-router-dom';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import {
  Container,
  CategoryTitle,
  CategoryResult,
  ClassificationContainer,
  ClassificationTitle,
  HeaderTable,
  HeaderTableText,
  TeamView,
  Team,
  TeamText,
  PositionText,
  TeamShield,
  Score,
  ScoreText,
  MatchContainer,
  MatchTitle,
  RoundView,
  RoundText,
  Matches,
  Match,
  DateView,
  DateText,
  MatchView,
  MatchTeamText,
  MatchScoreText,
  MatchTeamShield,
  Button,
} from './styles';

export default function UpdateMatches() {
  return (
    <Container>
      <CategoryTitle>TORNEIO A</CategoryTitle>
      <CategoryResult>
        <ClassificationContainer>
          <ClassificationTitle>CLASSIFICAÇÃO</ClassificationTitle>
          <HeaderTable>
            <HeaderTableText>P</HeaderTableText>
            <HeaderTableText>J</HeaderTableText>
            <HeaderTableText>V</HeaderTableText>
            <HeaderTableText>E</HeaderTableText>
            <HeaderTableText>D</HeaderTableText>
            <HeaderTableText>GP</HeaderTableText>
            <HeaderTableText>GC</HeaderTableText>
            <HeaderTableText>SG</HeaderTableText>
            <HeaderTableText>%</HeaderTableText>
          </HeaderTable>

          <TeamView>
            <Team>
              <PositionText>1</PositionText>
              <TeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png" />
              <TeamText>SAMPDORIA</TeamText>
            </Team>
            <Score>
              <ScoreText>12</ScoreText>
              <ScoreText score>4</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>87</ScoreText>
              <ScoreText score>34</ScoreText>
              <ScoreText score>88</ScoreText>
              <ScoreText score>5</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>100</ScoreText>
            </Score>
          </TeamView>
          <TeamView>
            <Team>
              <PositionText>2</PositionText>
              <TeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png" />
              <TeamText>INTERNAZIONALE</TeamText>
            </Team>
            <Score>
              <ScoreText>12</ScoreText>
              <ScoreText score>4</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>87</ScoreText>
              <ScoreText score>34</ScoreText>
              <ScoreText score>88</ScoreText>
              <ScoreText score>5</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>100</ScoreText>
            </Score>
          </TeamView>
          <TeamView>
            <Team>
              <PositionText>3</PositionText>
              <TeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png" />
              <TeamText>INTER DE MILÃO</TeamText>
            </Team>
            <Score>
              <ScoreText>12</ScoreText>
              <ScoreText score>4</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>87</ScoreText>
              <ScoreText score>34</ScoreText>
              <ScoreText score>88</ScoreText>
              <ScoreText score>5</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>100</ScoreText>
            </Score>
          </TeamView>
          <TeamView>
            <Team>
              <PositionText>4</PositionText>
              <TeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png" />
              <TeamText>SAMPDORIA</TeamText>
            </Team>
            <Score>
              <ScoreText>12</ScoreText>
              <ScoreText score>4</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>87</ScoreText>
              <ScoreText score>34</ScoreText>
              <ScoreText score>88</ScoreText>
              <ScoreText score>5</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>100</ScoreText>
            </Score>
          </TeamView>
          <TeamView>
            <Team>
              <PositionText>5</PositionText>
              <TeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png" />
              <TeamText>SAMPDORIA</TeamText>
            </Team>
            <Score>
              <ScoreText>12</ScoreText>
              <ScoreText score>4</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>87</ScoreText>
              <ScoreText score>34</ScoreText>
              <ScoreText score>88</ScoreText>
              <ScoreText score>5</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>100</ScoreText>
            </Score>
          </TeamView>
          <TeamView>
            <Team>
              <PositionText>6</PositionText>
              <TeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png" />
              <TeamText>SAMPDORIA</TeamText>
            </Team>
            <Score>
              <ScoreText>12</ScoreText>
              <ScoreText score>4</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>87</ScoreText>
              <ScoreText score>34</ScoreText>
              <ScoreText score>88</ScoreText>
              <ScoreText score>5</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>100</ScoreText>
            </Score>
          </TeamView>
          <TeamView>
            <Team>
              <PositionText>7</PositionText>
              <TeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png" />
              <TeamText>SAMPDORIA</TeamText>
            </Team>
            <Score>
              <ScoreText>12</ScoreText>
              <ScoreText score>4</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>87</ScoreText>
              <ScoreText score>34</ScoreText>
              <ScoreText score>88</ScoreText>
              <ScoreText score>5</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>100</ScoreText>
            </Score>
          </TeamView>
          <TeamView>
            <Team>
              <PositionText>8</PositionText>
              <TeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png" />
              <TeamText>SAMPDORIA</TeamText>
            </Team>
            <Score>
              <ScoreText>12</ScoreText>
              <ScoreText score>4</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>87</ScoreText>
              <ScoreText score>34</ScoreText>
              <ScoreText score>88</ScoreText>
              <ScoreText score>5</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>100</ScoreText>
            </Score>
          </TeamView>
          <TeamView>
            <Team>
              <PositionText>9</PositionText>
              <TeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png" />
              <TeamText>SAMPDORIA</TeamText>
            </Team>
            <Score>
              <ScoreText>12</ScoreText>
              <ScoreText score>4</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>87</ScoreText>
              <ScoreText score>34</ScoreText>
              <ScoreText score>88</ScoreText>
              <ScoreText score>5</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>100</ScoreText>
            </Score>
          </TeamView>
          <TeamView>
            <Team>
              <PositionText>10</PositionText>
              <TeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png" />
              <TeamText>SAMPDORIA</TeamText>
            </Team>
            <Score>
              <ScoreText>12</ScoreText>
              <ScoreText score>4</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>87</ScoreText>
              <ScoreText score>34</ScoreText>
              <ScoreText score>88</ScoreText>
              <ScoreText score>5</ScoreText>
              <ScoreText score>6</ScoreText>
              <ScoreText score>100</ScoreText>
            </Score>
          </TeamView>
        </ClassificationContainer>
        <MatchContainer>
          <MatchTitle>JOGOS</MatchTitle>
          <RoundView>
            <Link className="previous" to="/">
              <MdNavigateBefore size={36} color="#1E7A0E" />
            </Link>
            <RoundText>1ª RODADA</RoundText>
            <Link className="next" to="/">
              <MdNavigateNext size={36} color="#1E7A0E" />
            </Link>
          </RoundView>

          <Matches>
            <Match>
              <DateView>
                <DateText>SEX</DateText>
                <DateText margin>20/10</DateText>
              </DateView>
              <MatchView>
                <MatchTeamText team align="right">
                  SAMPDORIA
                </MatchTeamText>
                <MatchTeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png"></MatchTeamShield>
                <MatchScoreText>2</MatchScoreText>
                <MatchTeamText>X</MatchTeamText>
                <MatchScoreText>1</MatchScoreText>
                <MatchTeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png"></MatchTeamShield>
                <MatchTeamText team align="left">
                  INTERNAZIONALE
                </MatchTeamText>
              </MatchView>
            </Match>
            <Match>
              <DateView>
                <DateText>SEX</DateText>
                <DateText margin>20/10</DateText>
              </DateView>
              <MatchView>
                <MatchTeamText team align="right">
                  SAMPDORIA
                </MatchTeamText>
                <MatchTeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png"></MatchTeamShield>
                <MatchScoreText>10</MatchScoreText>
                <MatchTeamText>X</MatchTeamText>
                <MatchScoreText>15</MatchScoreText>
                <MatchTeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png"></MatchTeamShield>
                <MatchTeamText team align="left">
                  INTERNAZIONALE
                </MatchTeamText>
              </MatchView>
            </Match>
            <Match>
              <DateView>
                <DateText>SEX</DateText>
                <DateText margin>20/10</DateText>
              </DateView>
              <MatchView>
                <MatchTeamText team align="right">
                  SAMPDORIA
                </MatchTeamText>
                <MatchTeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png"></MatchTeamShield>
                <MatchScoreText>2</MatchScoreText>
                <MatchTeamText>X</MatchTeamText>
                <MatchScoreText>1</MatchScoreText>
                <MatchTeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png"></MatchTeamShield>
                <MatchTeamText team align="left">
                  INTERNAZIONALE
                </MatchTeamText>
              </MatchView>
            </Match>
            <Match>
              <DateView>
                <DateText>SEX</DateText>
                <DateText margin>20/10</DateText>
              </DateView>
              <MatchView>
                <MatchTeamText team align="right">
                  SAMPDORIA
                </MatchTeamText>
                <MatchTeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png"></MatchTeamShield>
                <MatchScoreText>2</MatchScoreText>
                <MatchTeamText>X</MatchTeamText>
                <MatchScoreText>1</MatchScoreText>
                <MatchTeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png"></MatchTeamShield>
                <MatchTeamText team align="left">
                  INTERNAZIONALE
                </MatchTeamText>
              </MatchView>
            </Match>
            <Match>
              <DateView>
                <DateText>SEX</DateText>
                <DateText margin>20/10</DateText>
              </DateView>
              <MatchView>
                <MatchTeamText team align="right">
                  SAMPDORIA
                </MatchTeamText>
                <MatchTeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png"></MatchTeamShield>
                <MatchScoreText>2</MatchScoreText>
                <MatchTeamText>X</MatchTeamText>
                <MatchScoreText>1</MatchScoreText>
                <MatchTeamShield src="https://rb-calcio.herokuapp.com/files/shields/sampdoria.png"></MatchTeamShield>
                <MatchTeamText team align="left">
                  INTERNAZIONALE
                </MatchTeamText>
              </MatchView>
            </Match>
          </Matches>

          <Button>ATUALIZAR</Button>
        </MatchContainer>
      </CategoryResult>
    </Container>
  );
}
