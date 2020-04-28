import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f0f0f0;
  padding: ${Constants.statusBarHeight}px ${hp('2%')}px 0px;
`;

export const Category = styled.View`
  background-color: #fff;
  padding: ${hp('2%')}px;
  border-radius: 8px;
  margin-bottom: ${hp('2.4%')};
`;

export const CategoryTitle = styled.Text`
  font-size: ${hp('4%')};
  font-weight: bold;
  color: #1e7a0e;
  margin-bottom: ${hp('2%')};
`;

export const HeaderTable = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

export const HeaderTableText = styled.Text`
  font-size: ${hp('2.2%')};
  font-weight: bold;
  color: #999;
  width: ${wp('7.2%')};
  margin-left: ${wp('1.8%')};
  text-align: center;
`;

export const TeamView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${hp('3%')};
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

export const Team = styled.View`
  flex-direction: row;
  align-items: center;
  max-width: ${wp('18%')};
`;

export const TeamText = styled.Text`
  font-size: ${hp('2.7%')};
  font-weight: bold;
  color: #717171;
`;

export const PositionText = styled.Text`
  font-size: ${hp('2.4%')};
  font-weight: bold;
  color: #999;
  width: ${wp('7.3%')};
  padding-right: 5px;
`;

export const TeamShield = styled.Image`
  width: ${wp('5.3%')};
  height: ${wp('5.3%')};
  margin-right: ${wp('1.3%')};
`;

export const Score = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ScoreText = styled.Text`
  font-size: ${hp('2.2%')};
  font-weight: bold;
  text-align: center;
  color: #999;
  width: ${wp('7.2%')};
  margin-left: ${(props) => (props.score ? wp('1.8%') : wp('0%'))};
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
  font-size: ${hp('3%')};
  font-weight: bold;
  color: #999;
`;

export const Loading = styled.View`
  flex: 1;
  height: ${hp('40%')};
  justify-content: center;
  align-items: center;
`;

export const DateView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: ${hp('2%')};
  margin-left: ${(props) => (props.margin ? wp('1.8%') : wp('0%'))};
  color: #999;
`;

export const MatchView = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: ${hp('3%')}px 0px;

  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;

  margin-bottom: ${hp('1.5%')};
`;

export const MatchTeamText = styled.Text`
  font-size: ${hp('2.5%')};
  font-weight: bold;
  width: ${(props) => (props.team ? wp('13%') : wp('5%'))};
  text-align: ${(props) => props.align || 'center'};
  color: #717171;
`;

export const MatchScoreText = styled.Text`
  font-size: ${hp('2.7%')};
  font-weight: bold;
  color: #717171;
  width: ${wp('7.2%')};
  text-align: center;
`;

export const MatchTeamShield = styled.Image`
  width: ${wp('7%')};
  height: ${wp('7%')};
`;
