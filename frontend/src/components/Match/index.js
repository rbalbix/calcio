import React from 'react';
import moment from 'moment';
import { MdSecurity } from 'react-icons/md';

import {
  MatchGlobalView,
  DateView,
  DateText,
  MatchView,
  MatchTeamText,
  MatchScoreText,
  MatchPenaltyText,
  MatchTeamShield,
  InputView,
  InputScore,
  InputPenalty,
} from './styles';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('pt-BR', ptBR);

const Match = ({
  match,
  index,
  scoreFields,
  penaltyFields,
  dateFields,
  handleInputChange,
  handlePenaltyChange,
  handleDateChange,
}) => {
  const handleCalendarClose = (_id) => {
    if (document.querySelector(`.date-picker${_id}`).value === '') {
      document.querySelector(`#toggle${_id}`).checked = false;
    }
  };

  return (
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
                  document.querySelector(`.date-picker${match._id}`).focus()
                }
              ></input>
              <label
                style={{ cursor: 'pointer' }}
                htmlFor={`toggle${match._id}`}
              >
                {`${match.weekDay} ${moment(match.day).utc().format('DD/MM')}`}
              </label>
              <DatePicker
                selected={dateFields[index].day}
                onChange={(event) => handleDateChange(index, event, match._id)}
                openToDate={
                  new Date(moment(match.day).utc().format('YYYY/MM/DD'))
                }
                minDate={new Date(moment(match.day).utc().format('YYYY/MM/DD'))}
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
          <MatchTeamShield src={match.teamHome.thumbnail_url}></MatchTeamShield>
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
                handleInputChange(
                  index,
                  event,
                  match._id,
                  match.game,
                  match.leg
                )
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
              onChange={(event) => handlePenaltyChange(index, event, match._id)}
              className={`penalty-home${match._id}`}
            />
          </InputView>
        ) : (
          <>
            <MatchScoreText>{match.scoreHome}</MatchScoreText>
            {match.penaltyHome !== undefined && (
              <MatchPenaltyText>{`(${match.penaltyHome}`}</MatchPenaltyText>
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
              onChange={(event) => handlePenaltyChange(index, event, match._id)}
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
                handleInputChange(
                  index,
                  event,
                  match._id,
                  match.game,
                  match.leg
                )
              }
            />
          </InputView>
        ) : (
          <>
            {match.penaltyAway !== undefined && (
              <MatchPenaltyText>{`${match.penaltyAway})`}</MatchPenaltyText>
            )}
            <MatchScoreText>{match.scoreAway}</MatchScoreText>
          </>
        )}
        {match.teamAway ? (
          <MatchTeamShield src={match.teamAway.thumbnail_url}></MatchTeamShield>
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
  );
};

export default Match;
