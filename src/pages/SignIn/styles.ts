import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #63cdd1;
  justify-content: center;
`;

export const Content = styled.View`
  padding: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #268596;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
export const CustomButtomText = styled.Text`
  font-size: 18px;
  color: #fff;
`;
export const SignMessageButton = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 50px;
  margin-bottom: 20px;
`;
export const SignMessageButtomText = styled.Text`
  font-size: 16px;
  color: #268596;
`;
export const SignMessageButtomTextBold = styled.Text`
  margin-left: 5px;
  font-size: 16px;
  color: #268596;
  font-weight: bold;
`;
