import React, { useState, useEffect } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import moment from 'moment';
import ReactLoading from 'react-loading';
import 'react-datepicker/dist/react-datepicker.css';

import api from '../../services/api';

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
  PrevNextRound,
  InputScore,
  Loading,
} from './styles';

import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('pt-BR', ptBR);

export default function UpdateMatches() {
  const [round, setRound] = useState(0);
  const [total, setTotal] = useState(0);
  const [rank, setRank] = useState([]);
  const [matches, setMatches] = useState([]);

  const [loadingRank, setLoadingRank] = useState(false);
  const [loadingMatches, setLoadingMatches] = useState(false);

  const initialScoreFields = [
    { _id: null, scoreHome: '', scoreAway: '' },
    { _id: null, scoreHome: '', scoreAway: '' },
    { _id: null, scoreHome: '', scoreAway: '' },
    { _id: null, scoreHome: '', scoreAway: '' },
    { _id: null, scoreHome: '', scoreAway: '' },
  ];

  const initialDateFields = [
    { _id: null, day: null },
    { _id: null, day: null },
    { _id: null, day: null },
    { _id: null, day: null },
    { _id: null, day: null },
  ];

  const [scoreFields, setScoreFields] = useState(initialScoreFields);
  const [dateFields, setDateFields] = useState(initialDateFields);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log(dateFields);
      console.log(scoreFields);

      // const response = await api.post('/match', { scoreFields });

      // loadRank();
      // loadMatches();

      setScoreFields([...initialScoreFields]);
      setDateFields([...initialDateFields]);
    } catch (err) {
      alert('Falha ao atualizar, tente novamente');
    }
  };

  const handleInputChange = (index, event, _id) => {
    const values = [...scoreFields];
    values[index]._id = _id;
    if (event.target.name === 'scoreHome') {
      values[index].scoreHome = event.target.value;
    } else {
      values[index].scoreAway = event.target.value;
    }

    setScoreFields(values);
  };

  const handleDateChange = (index, event, _id) => {
    const values = [...dateFields];

    values[index]._id = _id;
    values[index].day = event;

    setDateFields(values);
  };

  const handleCalendarClose = (_id) => {
    if (document.querySelector(`.date-picker${_id}`).value === '') {
      document.querySelector(`#toggle${_id}`).checked = false;
    }
  };

  async function loadRank() {
    setLoadingRank(true);

    const response = await api.get('/rank', {
      params: { category: 'A' },
    });

    setLoadingRank(false);
    setRank(response.data);
  }

  async function loadMatches() {
    setLoadingMatches(true);

    const response = await api.get('/match', {
      params: { category: 'A', round },
    });

    setTotal(parseInt(response.headers['x-total-count']));
    if (round === 0) setRound(parseInt(response.headers['x-round']));

    setLoadingMatches(false);
    setMatches(response.data);
  }

  async function loadPreviousMatches() {
    if (round - 1 <= 0) return;
    setRound(round - 1);
  }

  async function loadNextMatches() {
    if (round + 1 > total) return setRound(1);
    setRound(round + 1);
  }

  useEffect(() => {
    loadRank();
    loadMatches();
  }, []);

  useEffect(() => {
    loadMatches();
  }, [round]);

  return (
    <Container>
      <CategoryTitle>TORNEIO A</CategoryTitle>
      <CategoryResult>
        <ClassificationContainer>
          <ClassificationTitle>CLASSIFICAÇÃO</ClassificationTitle>
          {!loadingMatches && (
            <HeaderTable>
              <HeaderTableText>P</HeaderTableText>
              <HeaderTableText>J</HeaderTableText>
              <HeaderTableText>V</HeaderTableText>
              <HeaderTableText>E</HeaderTableText>
              <HeaderTableText>D</HeaderTableText>
              <HeaderTableText className="optional">GP</HeaderTableText>
              <HeaderTableText className="optional">GC</HeaderTableText>
              <HeaderTableText>SG</HeaderTableText>
              <HeaderTableText className="optional">%</HeaderTableText>
            </HeaderTable>
          )}
          {loadingRank ? (
            <Loading>
              <ReactLoading
                type="spinningBubbles"
                color="#1E7A0E"
                height="15%"
                width="15%"
              />
            </Loading>
          ) : (
            rank.map((item, index) => (
              <TeamView key={item._id}>
                <Team>
                  <PositionText>{index + 1}</PositionText>
                  <TeamShield src={item.team.thumbnail_url} />
                  <TeamText>{item.team.longName}</TeamText>
                </Team>
                <Score>
                  <ScoreText>{item.points}</ScoreText>
                  <ScoreText score>{item.played}</ScoreText>
                  <ScoreText score>{item.wons}</ScoreText>
                  <ScoreText score>{item.drawn}</ScoreText>
                  <ScoreText score>{item.lost}</ScoreText>
                  <ScoreText score className="optional">
                    {item.goalsFor}
                  </ScoreText>
                  <ScoreText score className="optional">
                    {item.goalsAgainst}
                  </ScoreText>
                  <ScoreText score>{item.goalDifference}</ScoreText>
                  <ScoreText score className="optional">
                    {item.performance}
                  </ScoreText>
                </Score>
              </TeamView>
            ))
          )}
        </ClassificationContainer>

        <MatchContainer>
          <MatchTitle>JOGOS</MatchTitle>
          {!loadingMatches && (
            <RoundView>
              <PrevNextRound
                onClick={() => loadPreviousMatches()}
                type="button"
              >
                <MdNavigateBefore size={36} color="#1E7A0E" />
              </PrevNextRound>
              <RoundText>{round}ª RODADA</RoundText>
              <PrevNextRound onClick={() => loadNextMatches()} type="button">
                <MdNavigateNext size={36} color="#1E7A0E" />
              </PrevNextRound>
            </RoundView>
          )}

          <Matches>
            <form onSubmit={handleSubmit}>
              {loadingMatches ? (
                <Loading>
                  <ReactLoading
                    type="spinningBubbles"
                    color="#1E7A0E"
                    height="15%"
                    width="15%"
                  />
                </Loading>
              ) : (
                matches.map((match, index) => (
                  <Match key={match._id}>
                    <DateView>
                      <DateText>
                        <input
                          id={`toggle${match._id}`}
                          type="checkbox"
                          style={{ display: 'none' }}
                        ></input>
                        <label htmlFor={`toggle${match._id}`}>
                          {`${match.weekDay} ${moment(match.day)
                            .utc()
                            .format('DD/MM')}`}
                        </label>

                        <DatePicker
                          selected={dateFields[index].day}
                          onChange={(event) =>
                            handleDateChange(index, event, match._id)
                          }
                          openToDate={
                            new Date(
                              moment(match.day).utc().format('YYYY/MM/DD')
                            )
                          }
                          minDate={
                            new Date(
                              moment(match.day).utc().format('YYYY/MM/DD')
                            )
                          }
                          dateFormat="E dd/MM"
                          locale="pt-BR"
                          onCalendarClose={() => handleCalendarClose(match._id)}
                          className={`date-picker${match._id}`}
                        />
                      </DateText>
                    </DateView>
                    <MatchView>
                      <MatchTeamText team align="right">
                        {match.teamHome.longName}
                      </MatchTeamText>
                      <MatchTeamShield
                        src={match.teamHome.thumbnail_url}
                      ></MatchTeamShield>
                      <MatchScoreText>
                        {match.scoreHome === null ? (
                          <InputScore
                            type="tel"
                            pattern="\d*"
                            title="Apenas números"
                            min="0"
                            max="99"
                            maxLength="2"
                            id="scoreHome"
                            name="scoreHome"
                            value={scoreFields.scoreHome}
                            onChange={(event) =>
                              handleInputChange(index, event, match._id)
                            }
                          />
                        ) : (
                          match.scoreHome
                        )}
                      </MatchScoreText>
                      <MatchTeamText>X</MatchTeamText>
                      <MatchScoreText>
                        {match.scoreAway === null ? (
                          <InputScore
                            type="tel"
                            pattern="\d*"
                            title="Apenas números"
                            min="0"
                            max="99"
                            maxLength="2"
                            id="scoreAway"
                            name="scoreAway"
                            value={scoreFields.scoreAway}
                            onChange={(event) =>
                              handleInputChange(index, event, match._id)
                            }
                          />
                        ) : (
                          match.scoreAway
                        )}
                      </MatchScoreText>
                      <MatchTeamShield
                        src={match.teamAway.thumbnail_url}
                      ></MatchTeamShield>
                      <MatchTeamText team align="left">
                        {match.teamAway.longName}
                      </MatchTeamText>
                    </MatchView>
                  </Match>
                ))
              )}
              {!loadingMatches && <Button type="submit">ATUALIZAR</Button>}
            </form>
          </Matches>
        </MatchContainer>
      </CategoryResult>
    </Container>
  );
}
