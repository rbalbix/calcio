import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f0f0f0;
  padding: ${Constants.statusBarHeight + 5}px 14px 0px;
`;

export const Category = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const CategoryTitle = styled.Text`
  font-size: 24px;
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
  font-size: 14px;
  font-weight: bold;
  color: #999;
  margin-left: 30px;
`;

export const TeamView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

export const Team = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PositionText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999;
  padding-right: 5px;
`;

export const TeamShield = styled.Image`
  width: 20px;
  height: 20px;
`;

export const TeamText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #717171;
  padding-left: 5px;
`;

export const Score = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ScoreText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999;
  margin-left: 25px;
`;
