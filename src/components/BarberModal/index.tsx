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
  DateList,
  DateItem,
  DateItemWeekDay,
  DateItemNumber,
  TimeList,
  TimeItem,
  TimeItemText,
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
  const [selectedHour, setSelectedHour] = useState(0);
  const [listDays, setListDays] = useState([]);
  const [listHours, setListHours] = useState([]);

  useEffect(() => {
    if (user.available && selectedDay > 0) {
      let d = new Date(selectedYear, selectedMonth, selectedDay);

      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;
      let selDate = `${year} - ${month} - ${day}`;

      let availability = user.available.filter(e => e.date === selDate);

      if (availability.length > 0) {
        setListHours(availability[0].hours);
      }
    }
  }, [selectedDay, user]);

  useEffect(() => {
    let today = new Date();

    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth());
    setSelectedDay(today.getDate());
  }, []);

  useEffect(() => {
    if (user.available) {
      let dayInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
      let newListDays = [];
      let days = [];

      for (let i = 1; i <= dayInMonth; i++) {
        let d = new Date(selectedYear, selectedMonth, i);
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        let selDate = `${year} - ${month} - ${day}`;

        let availability = user.available.filter(e => e.date === selDate);

        newListDays.push({
          status: availability.lenght > 0 ? true : false,
          weekday: Days[d.getDay()],
          number: i,
        });
      }

      setListDays(newListDays);
      setSelectedDay(1);
      setListHours([]);
      setSelectedHour(0);

      console.log(dayInMonth);
    }
  }, [user, selectedMonth, selectedYear]);

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

  const handleDateLeftClick = () => {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() - 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDay(0);
  };

  const handleDateRightClick = () => {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() + 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDay(0);
  };

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
              <DatePrevArea onPress={handleDateLeftClick}>
                <NavPreIcon width="35" height="35" fill="#eeee" />
              </DatePrevArea>
              <DateTitleArea>
                <DateTitle>
                  {months[selectedMonth]} {selectedYear}
                </DateTitle>
              </DateTitleArea>
              <DateNextArea onPress={handleDateRightClick}>
                <NavNextIcon width="35" height="35" fill="#eeee" />
              </DateNextArea>
            </DateInfo>

            <DateList horizontal={true} showsHorizontalScrollIndicator={false}>
              {listDays.map((item, key) => (
                <DateItem
                  key={key}
                  onPress={() => {
                    item.status ? setSelectedDay(item.number) : null;
                  }}
                  style={{
                    opacity: item.status ? 1 : 0.5,
                    backgroundColor:
                      item.number === selectedDay ? '#4eafbe' : '#fff',
                  }}>
                  <DateItemWeekDay
                    style={{
                      color: item.number === selectedDay ? '#fff' : '#000',
                    }}>
                    {item.weekday}
                  </DateItemWeekDay>
                  <DateItemNumber
                    style={{
                      color: item.number === selectedDay ? '#fff' : '#000',
                    }}>
                    {item.number}
                  </DateItemNumber>
                </DateItem>
              ))}
            </DateList>
          </ModalItem>

          {listHours.length > 0 && (
            <ModalItem>
              <TimeList horizontal={true}>
                {listHours.map((item, key) => (
                  <TimeItem key={key} onPress={() => {}}>
                    <TimeItemText>{item}</TimeItemText>
                  </TimeItem>
                ))}
              </TimeList>
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
