import React, { useState, useEffect } from 'react';
import { MdNavigateBefore, MdNavigateNext, MdSecurity } from 'react-icons/md';
import moment from 'moment';
import ReactLoading from 'react-loading';
import { useSnackbar } from 'notistack';

import {
  MatchContainer,
  MatchTitleView,
  MatchTitle,
  RoundView,
  RoundText,
  MatchesView,
  MatchGlobalView,
  DateView,
  DateText,
  MatchView,
  MatchTeamText,
  MatchScoreText,
  MatchPenaltyText,
  MatchTeamShield,
  Button,
  PrevNextRound,
  InputView,
  InputScore,
  InputPenalty,
} from './styles';

import api from '../../services/api';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('pt-BR', ptBR);

const Matches = ({ category, loadRank }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [round, setRound] = useState(0);
  const [total, setTotal] = useState(0);
  const [matches, setMatches] = useState([]);

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

  const initialPenaltyFields = [
    { _id: null, penaltyHome: '', penaltyAway: '' },
    { _id: null, penaltyHome: '', penaltyAway: '' },
    { _id: null, penaltyHome: '', penaltyAway: '' },
    { _id: null, penaltyHome: '', penaltyAway: '' },
    { _id: null, penaltyHome: '', penaltyAway: '' },
  ];

  const [scoreFields, setScoreFields] = useState(initialScoreFields);
  const [dateFields, setDateFields] = useState(initialDateFields);
  const [penaltyFields, setPenaltyFields] = useState(initialPenaltyFields);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      let hasScoreFields = false;
      let hasDateFields = false;
      let hasPenaltyFields = false;

      for (const i in scoreFields) {
        if (
          scoreFields[i]._id !== null &&
          scoreFields[i].scoreHome !== '' &&
          scoreFields[i].scoreAway !== ''
        ) {
          hasScoreFields = true;
          break;
        }
      }

      for (const i in dateFields) {
        if (dateFields[i]._id !== null && dateFields[i].day !== null) {
          hasDateFields = true;
          break;
        }
      }

      for (const i in penaltyFields) {
        if (
          penaltyFields[i]._id !== null &&
          penaltyFields[i].penaltyHome !== '' &&
          penaltyFields[i].penaltyAway !== ''
        ) {
          hasPenaltyFields = true;
          break;
        }
      }

      if (hasScoreFields || hasDateFields || hasPenaltyFields) {
        await api.post('/match', {
          scoreFields,
          dateFields,
          penaltyFields,
          round,
          category,
        });

        loadRank();
        await loadMatches();

        setScoreFields([...initialScoreFields]);
        setDateFields([...initialDateFields]);
        setDateFields([...initialPenaltyFields]);

        document.querySelectorAll('input:checked').forEach(function (el) {
          el.checked = false;
        });

        enqueueSnackbar('Atualizado com sucesso !', {
          variant: 'success',
        });
      }
    } catch (err) {
      console.log(err);
      enqueueSnackbar('Falha ao atualizar, tente novamente !', {
        variant: 'error',
      });
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

    if (
      round > 27 &&
      values[index].scoreAway !== '' &&
      values[index].scoreHome !== ''
    ) {
      if (values[index].scoreAway === values[index].scoreHome) {
        document.querySelector(`.penalty-home${_id}`).style.display = 'block';
        document.querySelector(`.penalty-away${_id}`).style.display = 'block';
      } else {
        const penalties = [...penaltyFields];
        penalties[index].penaltyHome = '';
        penalties[index].penaltyAway = '';
        setPenaltyFields(penalties);
        document.querySelector(`.penalty-home${_id}`).value = '';
        document.querySelector(`.penalty-away${_id}`).value = '';
        document.querySelector(`.penalty-home${_id}`).style.display = 'none';
        document.querySelector(`.penalty-away${_id}`).style.display = 'none';
      }
    }

    setScoreFields(values);
  };

  const handlePenaltyChange = (index, event, _id) => {
    const values = [...penaltyFields];
    values[index]._id = _id;
    if (event.target.name === 'penaltyHome') {
      values[index].penaltyHome = event.target.value;
    } else {
      values[index].penaltyAway = event.target.value;
    }
    setPenaltyFields(values);
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

  async function loadMatches() {
    setLoadingMatches(true);

    const response = await api.get('/match', {
      params: { category, round },
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
    loadMatches();
    // eslint-disable-next-line
  }, [round]);

  return (
    <MatchContainer>
      <MatchTitleView>
        <MatchTitle>JOGOS</MatchTitle>
        <MatchTitle>
          {loadingMatches ? (
            <ReactLoading
              type="spokes"
              color="#1E7A0E"
              height="2rem"
              width="2rem"
            />
          ) : (
            ''
          )}
        </MatchTitle>
      </MatchTitleView>

      <RoundView>
        <PrevNextRound
          onClick={() => loadPreviousMatches()}
          type="button"
          disabled={loadingMatches}
        >
          <MdNavigateBefore size={36} color="#1E7A0E" />
        </PrevNextRound>
        <RoundText>
          {round === 28
            ? 'QUARTAS'
            : round === 29
            ? 'QUARTAS'
            : round === 30
            ? 'SEMIFINAL'
            : round === 31
            ? 'FINAL'
            : round === 0
            ? ''
            : `${round}ª RODADA`}
        </RoundText>
        <PrevNextRound
          onClick={() => loadNextMatches()}
          type="button"
          disabled={loadingMatches}
        >
          <MdNavigateNext size={36} color="#1E7A0E" />
        </PrevNextRound>
      </RoundView>
      <MatchesView>
        <form onSubmit={handleSubmit}>
          {matches.map((match, index) => (
            <MatchGlobalView key={match._id}>
              <DateView>
                <DateText>
                  {match.scoreHome === null && match.scoreAway === null ? (
                    <>
                      <input
                        id={`toggle${match._id}`}
                        type="checkbox"
                        style={{ display: 'none' }}
                        onClick={() =>
                          document
                            .querySelector(`.date-picker${match._id}`)
                            .focus()
                        }
                      ></input>
                      <label
                        style={{ cursor: 'pointer' }}
                        htmlFor={`toggle${match._id}`}
                      >
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
                          new Date(moment(match.day).utc().format('YYYY/MM/DD'))
                        }
                        minDate={
                          new Date(moment(match.day).utc().format('YYYY/MM/DD'))
                        }
                        dateFormat="E dd/MM"
                        locale="pt-BR"
                        onCalendarClose={() => handleCalendarClose(match._id)}
                        className={`date-picker${match._id}`}
                      />
                    </>
                  ) : (
                    <div style={{ cursor: 'not-allowed' }}>
                      {match.weekDay} {moment(match.day).utc().format('DD/MM')}
                    </div>
                  )}
                </DateText>
              </DateView>
              <MatchView>
                <MatchTeamText team align="right" long="true">
                  {match.teamHome ? match.teamHome.longName : 'TIME'}
                </MatchTeamText>
                <MatchTeamText team align="right" long="false">
                  {match.teamHome ? match.teamHome.shortName : 'TIM'}
                </MatchTeamText>
                {match.teamHome ? (
                  <MatchTeamShield
                    src={match.teamHome.thumbnail_url}
                  ></MatchTeamShield>
                ) : (
                  <MdSecurity size={30} color="#999999" />
                )}
                {match.scoreHome === null ? (
                  <InputView>
                    <InputScore
                      disabled={match.teamHome.isFake || match.teamAway.isFake}
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
                    <InputPenalty
                      type="tel"
                      pattern="\d*"
                      title="Apenas números"
                      min="0"
                      max="99"
                      maxLength="2"
                      id="penaltyHome"
                      name="penaltyHome"
                      value={penaltyFields.penaltyHome}
                      onChange={(event) =>
                        handlePenaltyChange(index, event, match._id)
                      }
                      className={`penalty-home${match._id}`}
                    />
                  </InputView>
                ) : (
                  <>
                    <MatchScoreText>{match.scoreHome}</MatchScoreText>
                    {match.penaltyHome && (
                      <MatchPenaltyText>
                        {`(${match.penaltyHome}`}
                      </MatchPenaltyText>
                    )}
                  </>
                )}
                <MatchScoreText>X</MatchScoreText>
                {match.scoreAway === null ? (
                  <InputView>
                    <InputPenalty
                      type="tel"
                      pattern="\d*"
                      title="Apenas números"
                      min="0"
                      max="99"
                      maxLength="2"
                      id="penaltyAway"
                      name="penaltyAway"
                      value={penaltyFields.penaltyAway}
                      onChange={(event) =>
                        handlePenaltyChange(index, event, match._id)
                      }
                      className={`penalty-away${match._id}`}
                    />
                    <InputScore
                      disabled={match.teamHome.isFake || match.teamAway.isFake}
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
                  </InputView>
                ) : (
                  <>
                    {match.penaltyAway && (
                      <MatchPenaltyText>
                        {`${match.penaltyAway})`}
                      </MatchPenaltyText>
                    )}
                    <MatchScoreText>{match.scoreAway}</MatchScoreText>
                  </>
                )}
                {match.teamAway ? (
                  <MatchTeamShield
                    src={match.teamAway.thumbnail_url}
                  ></MatchTeamShield>
                ) : (
                  <MdSecurity size={30} color="#999999" />
                )}
                <MatchTeamText team align="left" long="true">
                  {match.teamAway ? match.teamAway.longName : 'TIME'}
                </MatchTeamText>
                <MatchTeamText team align="left" long="false">
                  {match.teamAway ? match.teamAway.shortName : 'TIM'}
                </MatchTeamText>
              </MatchView>
            </MatchGlobalView>
          ))}
          <Button type="submit" disabled={loadingMatches}>
            ATUALIZAR
          </Button>
        </form>
      </MatchesView>
    </MatchContainer>
  );
};

export default Matches;
