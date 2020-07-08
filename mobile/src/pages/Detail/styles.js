import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.ScrollView`
  /* flex: 1; */
  background-color: #f0f0f0;
  padding: ${Constants.statusBarHeight}px ${hp('1.5%')}px 0px;
`;
