import React, {useContext, useEffect} from 'react';
import {Container, LoadingIcon, ViewLogo} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import BarberLogo from '../../assets/barber.svg';
import {UserContext} from '../../contexts/UserContext';
import {checkToken} from '../../services/checkToken';

export function Preload() {
  const navigation = useNavigation();
  const {state, dispatch} = useContext(UserContext);

  useEffect(() => {
    const checkTokenLogin = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token !== null) {
        const response = await checkToken({token});
        console.log(response);

        if (response.data.token) {
          console.log('aa');
          await AsyncStorage.setItem('token', response.data.token);

          dispatch({
            type: 'setAvatar',
            payload: {
              avatar: response.data.data.avatar,
            },
          });

          navigation.navigate('MainTab');
        } else {
          console.log('aa');
          alert(response.data.error);
        }
      } else {
        navigation.navigate('SignIn');
      }
    };

    checkTokenLogin();
  }, []);

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon color="#fff" size="large" />
    </Container>
  );
}
