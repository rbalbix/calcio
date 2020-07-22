import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

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
