import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  background-color: #63c2e1;
  flex: 1;
  justify-content: center;
`;

export const ViewLogo = styled.View``;
export const LoadingIcon = styled.ActivityIndicator`
  margin-top: ${RFValue(50)}px;
`;
