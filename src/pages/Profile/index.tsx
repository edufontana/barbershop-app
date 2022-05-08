import React from 'react';
import {Text} from 'react-native';
import {Container, ButtonLogout} from './styles';
import {logout} from '../../services/logout';
import {useNavigation} from '@react-navigation/native';

export function Profile() {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await logout();
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <Container>
      <Text>aaa</Text>
      <ButtonLogout onPress={handleLogout} title="logout" />
    </Container>
  );
}
