import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #63c2d1;
`;

export const Scroller = styled.ScrollView`
  padding: 20px;
  flex: 1;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  width: 60%;
`;

export const SearchButton = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
`;

export const LocationArea = styled.View`
  background-color: #4eadbe;
  height: 60px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
`;

export const LocationInput = styled.TextInput`
  flex: 1;
  color: #fff;
`;

export const LocationFinder = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;
