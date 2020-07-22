import React from 'react';
import moment from 'moment';

import {
  DateView,
  DateText,
  MatchView,
  MatchTeamText,
  MatchPenaltyText,
  MatchScoreText,
  MatchTeamShield,
} from './styles';

const Match = ({ match }) => {
  return (
    <>
      <DateView>
        <DateText>{match.weekDay}</DateText>
        <DateText margin>{moment(match.day).utc().format('DD/MM')}</DateText>
      </DateView>
      <MatchView>
        <MatchTeamText team align="right">
          {match.teamHome.shortName}
        </MatchTeamText>
        <MatchTeamShield
          source={{
            uri: match.teamHome.thumbnail_url,
          }}
        ></MatchTeamShield>
        <>
          <MatchScoreText>{match.scoreHome}</MatchScoreText>
          {match.penaltyHome !== undefined && (
            <MatchPenaltyText>{`(${match.penaltyHome}`}</MatchPenaltyText>
          )}
        </>
        <MatchTeamText>X</MatchTeamText>
        <>
          {match.penaltyAway !== undefined && (
            <MatchPenaltyText>{`${match.penaltyAway})`}</MatchPenaltyText>
          )}
          <MatchScoreText>{match.scoreAway}</MatchScoreText>
        </>
        <MatchTeamShield
          source={{
            uri: match.teamAway.thumbnail_url,
          }}
        ></MatchTeamShield>
        <MatchTeamText team align="left">
          {match.teamAway.shortName}
        </MatchTeamText>
      </MatchView>
    </>
  );
};

export default Match;
