import React, {useEffect} from 'react';
import {Container, LoadingIcon, ViewLogo} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import BarberLogo from '../../assets/barber.svg';
export function Preload() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token !== null) {
        //validar
      } else {
        navigation.navigate('SingIn' as never);
      }
    };

    checkToken();
  }, []);

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon color="#fff" size="large" />
    </Container>
  );
}
