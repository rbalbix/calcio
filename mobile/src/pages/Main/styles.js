import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.ScrollView`
  flex: 1;
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
  font-size: ${Math.min(hp('4%'), 28)}px;
  font-weight: bold;
  color: #1e7a0e;
`;

export const Loading = styled.View`
  flex: 1;
  height: ${hp('40%')}px;
  justify-content: center;
  align-items: center;
`;

export const HeaderTable = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

export const HeaderTableText = styled.Text`
  font-size: ${Math.min(hp('2.2%'), 16)}px;
  font-weight: bold;
  text-align: center;
  color: #999;
  width: ${Math.min(wp('7.2%'), 28)}px;
  margin-left: ${wp('0.1%')}px;
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
  max-width: ${wp('52%')}px;
`;

export const PositionText = styled.Text`
  font-size: ${Math.min(hp('2.4%'), 18)}px;
  font-weight: bold;
  color: #999;
  padding-right: 5px;
`;

export const TeamShield = styled.Image`
  width: ${wp('5.3%')}px;
  height: ${wp('5.3%')}px;
`;

export const TeamText = styled.Text`
  font-size: ${Math.min(hp('2.4%'), 18)}px;
  font-weight: bold;
  color: #717171;
  padding-left: 5px;
`;

export const Score = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ScoreText = styled.Text`
  font-size: ${Math.min(hp('2.2%'), 16)}px;
  font-weight: bold;
  text-align: center;
  color: #999;
  width: ${Math.min(wp('7.2%'), 28)}px;
  margin-left: ${(props) => (props.score ? wp('0.1%') : wp('0%'))}px;
`;
