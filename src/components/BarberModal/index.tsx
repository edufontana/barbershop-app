import React, {useEffect, useState} from 'react';
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
  DateInfo,
  DatePrevArea,
  DateTitleArea,
  DateTitle,
  DateNextArea,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import ExpandIcon from '../../assets/expand.svg';
import NavPreIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/next.svg';

export function BarberModal({show, setShow, user, service}) {
  const navigation = useNavigation();
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState(null);
  const [listDays, setListDays] = useState([]);
  const [listHours, setListHours] = useState([]);

  useEffect(() => {
    let today = new Date();

    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth());
    setSelectedDay(today.getDate());
  }, []);

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const Days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

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

          <ModalItem>
            <DateInfo>
              <DatePrevArea>
                <NavPreIcon width="35" height="35" fill="#eeee" />
              </DatePrevArea>
              <DateTitleArea>
                <DateTitle>
                  {months[selectedMonth]} {selectedYear}
                </DateTitle>
              </DateTitleArea>
              <DateNextArea>
                <NavNextIcon width="35" height="35" fill="#eeee" />
              </DateNextArea>
            </DateInfo>
          </ModalItem>

          <FinishButton onPress={handleFinishClick}>
            <FinishText>Finalizar Agendamento</FinishText>
          </FinishButton>
        </ModalBody>
      </ModalArea>
    </Modal>
  );
}
