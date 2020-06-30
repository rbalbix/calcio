import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.ScrollView`
  /* flex: 1; */
  background-color: #f0f0f0;
  padding: ${Constants.statusBarHeight}px ${hp('1.5%')}px 0px;
`;

export const Category = styled.View`
  background-color: #fff;
  padding: ${hp('2%')}px;
  border-radius: 8px;
  margin-bottom: ${hp('2.4%')}px;
`;

export const CategoryTitle = styled.Text`
  font-family: 'Ubuntu_700Bold';
  font-size: ${Math.min(hp('4%'), 28)}px;
  color: #1e7a0e;
  margin-bottom: ${hp('2%')}px;
`;

export const HeaderTable = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

export const HeaderTableText = styled.Text`
  font-family: 'Ubuntu_700Bold';
  font-size: ${Math.min(hp('2.2%'), 18)}px;
  color: #999;
  width: ${wp('7.2%')}px;
  margin-left: ${wp('0.2%')}px;
  text-align: center;
`;

export const TeamView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${hp('3%')}px;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

export const Team = styled.View`
  flex-direction: row;
  align-items: center;
  max-width: ${wp('18%')}px;
`;

export const PositionText = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: ${Math.min(hp('2.4%'), 20)}px;
  color: #999;
  width: ${wp('7.2%')}px;
  padding-right: 5px;
`;

export const TeamText = styled.Text`
  font-family: 'Roboto_500Medium';
  font-size: ${Math.min(hp('2.7%'), 20)}px;
  color: #717171;
`;

export const TeamShield = styled.Image`
  width: ${wp('5.3%')}px;
  height: ${wp('5.3%')}px;
  margin-right: ${wp('1.3%')}px;
`;

export const Score = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ScoreText = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: ${Math.min(hp('2.2%'), 18)}px;
  text-align: center;
  color: #999;
  width: ${wp('7.2%')}px;
  margin-left: ${(props) => (props.score ? wp('0.2%') : wp('0%'))}px;
`;

export const RoundView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 5px;
  margin-bottom: 10px;

  border-top-width: 1px;
  border-top-color: #e0e0e0;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

export const RoundText = styled.Text`
  font-family: 'Ubuntu_700Bold';
  font-size: ${hp('3%')}px;
  color: #999;
`;

export const Icon = styled(MaterialIcons)`
  font-size: ${hp('5%')}px;
  color: #1e7a0e;
`;

export const Loading = styled.View`
  flex: 1;
  height: ${hp('40%')}px;
  justify-content: center;
  align-items: center;
`;

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
