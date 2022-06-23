import React, {useEffect} from 'react';
import {
  Modal,
  ModalArea,
  ModalBody,
  CloseButton,
  ModalItem,
  UserInfo,
  UserAvatar,
  UserName,
  ViewWrapper,
  ServiceInfo,
  ServiceName,
  ServicePrice,
  FinishButton,
  FinishText,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import ExpandIcon from '../../assets/expand.svg';

export function BarberModal({show, setShow, user, service}) {
  const navigation = useNavigation();

  const handleCloseModal = () => {
    setShow(!show);
  };

  const handleFinishClick = () => {};

  return (
    <Modal visible={show} transparent={true}>
      <ModalArea>
        <ModalBody>
          <CloseButton onPress={handleCloseModal}>
            <ExpandIcon width="40" height="40" fill="#000" />
          </CloseButton>

          <ModalItem>
            <ViewWrapper>
              <UserAvatar
                source={{
                  uri: user.avatar,
                }}
              />
              <UserInfo>
                <UserName>{user.name}</UserName>
              </UserInfo>
            </ViewWrapper>
          </ModalItem>

          {service !== null && (
            <ModalItem>
              <ServiceInfo>
                <ServiceName>{user.services[service].name}</ServiceName>
                <ServicePrice>
                  R$ {user.services[service].price.toFixed(2)}
                </ServicePrice>
              </ServiceInfo>
            </ModalItem>
          )}

          <FinishButton onPress={handleFinishClick}>
            <FinishText>Finalizar Agendamento</FinishText>
          </FinishButton>
        </ModalBody>
      </ModalArea>
    </Modal>
  );
}
