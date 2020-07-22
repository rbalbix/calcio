import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const DateView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DateText = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: ${hp('2%')}px;
  margin-left: ${(props) => (props.margin ? wp('1.8%') : wp('0%'))}px;
  color: #999;
`;

export const MatchView = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: ${hp('3%')}px 0px;

  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;

  margin-bottom: ${hp('1.5%')}px;
`;

export const MatchTeamText = styled.Text`
  font-family: 'Roboto_500Medium';
  font-size: ${hp('2.5%')}px;
  width: ${(props) => (props.team ? wp('13%') : wp('5%'))}px;
  text-align: ${(props) => props.align || 'center'};
  color: #717171;
`;

export const MatchScoreText = styled.Text`
  font-family: 'Ubuntu_700Bold';
  font-size: ${hp('2.7%')}px;
  color: #717171;
  width: ${wp('7.2%')}px;
  text-align: center;
`;

export const MatchPenaltyText = styled.Text`
  font-family: 'Roboto_500Medium';
  font-size: ${hp('2.0%')}px;
  color: #999;
  text-align: center;
`;

export const MatchTeamShield = styled.Image`
  width: ${wp('7%')}px;
  height: ${wp('7%')}px;
`;
