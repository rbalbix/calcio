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
  padding: ${hp('2.5%')}px;
  border-radius: 8px;
  margin-bottom: ${hp('2.4%')};
`;

export const CategoryTitle = styled.Text`
  font-size: ${hp('4%')};
  font-weight: bold;
  color: #1e7a0e;
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
  margin-left: ${wp('5%')};
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
  max-width: ${wp('52%')};
`;

export const PositionText = styled.Text`
  font-size: ${hp('2.4%')};
  font-weight: bold;
  color: #999;
  padding-right: 5px;
`;

export const TeamShield = styled.Image`
  width: ${wp('5.3%')};
  height: ${wp('5.3%')};
`;

export const TeamText = styled.Text`
  font-size: ${hp('2.4%')};
  font-weight: bold;
  color: #717171;
  padding-left: 5px;
`;

export const Score = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ScoreText = styled.Text`
  font-size: ${hp('2.2%')};
  font-weight: bold;
  color: #999;
  margin-left: ${wp('4.6%')};
  margin-left: ${(props) => (props.score ? wp('4.6%') : wp('0%'))};
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
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;

export const DateView = styled.View`
  align-items: center;
`;

export const DateText = styled.Text`
  color: #999;
`;

export const MatchView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;

  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;

  margin-bottom: 10px;
`;

export const MatchTeamText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #717171;
  /* padding-left: 10px; */
`;

export const MatchTeamShield = styled.Image`
  width: 25px;
  height: 25px;
`;
