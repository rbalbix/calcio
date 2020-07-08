import React from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import moment from 'moment';

import {
  Category,
  CategoryTitle,
  RoundView,
  RoundText,
  Icon,
  Loading,
  DateView,
  DateText,
  MatchView,
  MatchTeamText,
  MatchPenaltyText,
  MatchScoreText,
  MatchTeamShield,
} from './styles';

const Matches = ({
  round,
  totalRegular,
  loadPreviousMatches,
  loadNextMatches,
  loading,
  matches,
}) => {
  return (
    <Category>
      <CategoryTitle>JOGOS</CategoryTitle>

      {round !== 0 && (
        <RoundView>
          <TouchableOpacity onPress={loadPreviousMatches}>
            <Icon name="navigate-before" />
          </TouchableOpacity>
          <RoundText>
            {round === totalRegular + 1
              ? 'QUARTAS (IDA)'
              : round === totalRegular + 2
              ? 'QUARTAS (VOLTA)'
              : round === totalRegular + 3
              ? 'SEMIFINAL'
              : round === totalRegular + 4
              ? 'FINAL'
              : round === 0
              ? ''
              : `${round}ª RODADA`}
          </RoundText>
          <TouchableOpacity onPress={loadNextMatches}>
            <Icon name="navigate-next" />
          </TouchableOpacity>
        </RoundView>
      )}
      {loading ? (
        <Loading>
          <ActivityIndicator size="large" color="#1e7a0e" />
        </Loading>
      ) : (
        matches.map((match) => (
          <View key={match._id}>
            <DateView>
              <DateText>{match.weekDay}</DateText>
              <DateText margin>
                {moment(match.day).utc().format('DD/MM')}
              </DateText>
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
          </View>
        ))
      )}
    </Category>
  );
};

export default Matches;
