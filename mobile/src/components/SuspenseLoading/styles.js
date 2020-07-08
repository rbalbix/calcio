import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const Text = styled.Text`
  margin-top: 10px;
  font-family: 'Ubuntu_700Bold';
  font-size: ${Math.min(hp('2%'), 16)}px;
`;
