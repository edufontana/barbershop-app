import styled from 'styled-components/native';

interface TabProps {
  opacity: boolean;
}

export const TabArea = styled.View`
  height: 60px;
  background-color: #4eadbe;
  flex-direction: row;
  width: 100%;
`;

export const TabItem = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;
  border: 2px solid #4eadbe;
  position: relative;
  bottom: 25px;
`;

export const TabImageProfile = styled.Image<TabProps>`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  opacity: ${({opacity}) => (opacity ? 1 : 0.5)};
`;
