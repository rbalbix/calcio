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
  margin-bottom: 5px;
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
  margin-left: 15px;
  min-width: 20px;

  justify-content: center;
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

export const PositionText = styled.Text.attrs({
  textJustify: 'center',
})`
  font-size: 14px;
  font-weight: bold;
  color: #999;
  min-width: 20px;
`;

export const TeamShield = styled.Image`
  width: 20px;
  height: 20px;
  margin: 0 5px;
`;

export const TeamText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #717171;
  padding-left: 10px;
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
  margin-left: 15px;
  min-width: 20px;
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
