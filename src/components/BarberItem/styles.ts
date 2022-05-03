import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;
export const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;
export const UserName = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;
export const SeeProfileButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #4eafbe;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
export const SeeProfileButtonText = styled.Text`
  color: #268596;
  font-size: 13px;
`;
