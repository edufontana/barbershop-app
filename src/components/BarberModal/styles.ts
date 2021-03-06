import styled from 'styled-components/native';

export const Modal = styled.Modal``;

export const ModalArea = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  flex: 1;
  justify-content: flex-end;
`;
export const ModalBody = styled.View`
  background-color: #83d6e3;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 300px;
  padding: 10px 20px 40px 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
`;

export const ModalItem = styled.View`
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 10px;
`;

export const UserInfo = styled.Text`
  flex-direction: row;
  align-items: center;
`;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  margin-right: 15px;
`;

export const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ViewWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ServiceInfo = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ServiceName = styled.Text`
  font-weight: bold;
`;

export const ServicePrice = styled.Text`
  font-weight: bold;
`;

export const FinishButton = styled.TouchableOpacity`
  background-color: #268596;
  height: 60px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 10px;
`;

export const FinishText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DatePrevArea = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;

  justify-content: flex-end;
`;

export const DateTitleArea = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 140px;
`;

export const DateTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #000;
`;

export const DateNextArea = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-start;

  justify-content: flex-start;
`;

export const DateList = styled.ScrollView``;

export const DateItem = styled.TouchableOpacity`
  width: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const DateItemWeekDay = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const DateItemNumber = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const TimeList = styled.ScrollView``;

export const TimeItem = styled.TouchableOpacity`
  width: 75px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const TimeItemText = styled.Text`
  font-size: 16px;
`;
