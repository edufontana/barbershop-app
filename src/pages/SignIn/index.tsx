import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert, Text} from 'react-native';
import {UserContext} from '../../contexts/UserContext';
import {
  Container,
  Content,
  InputArea,
  CustomButton,
  CustomButtomText,
  SignMessageButton,
  SignMessageButtomText,
  SignMessageButtomTextBold,
} from './styles';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import {SignInInput} from '../../components/SignInInput';
import {signIn} from '../../services/signIn';
import AsyncStorage from '@react-native-community/async-storage';

export function SignIn() {
  const [email, setEmail] = useState('suporte@b7web.com.br');
  const [password, setPassword] = useState('1234');
  const navigation = useNavigation();
  const {state, dispatch} = useContext(UserContext);

  const handleMessageButtonClick = () => {
    navigation.navigate('SignUp');
  };

  const handleSignClick = async () => {
    if (email != '' && password != '') {
      let json = await signIn({email, password});

      if (json.data.token) {
        await AsyncStorage.setItem('token', json.data.token);

        dispatch({
          type: 'setAvatar',
          payload: {
            avatar: json.data.data.avatar,
          },
        });

        navigation.navigate('MainTab');
      } else {
        alert('email ou senha errados');
      }
    }
  };

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <Content>
        <InputArea>
          <SignInInput
            IconSvg={EmailIcon}
            placeholder={'Digite seu e-mail'}
            value={email}
            onChangeText={t => setEmail(t)}
          />
          <SignInInput
            IconSvg={LockIcon}
            placeholder={'Digite sua senha'}
            value={password}
            secureTextEntry={true}
            onChangeText={t => setPassword(t)}
          />
          <CustomButton onPress={handleSignClick}>
            <CustomButtomText>Login</CustomButtomText>
          </CustomButton>
        </InputArea>

        <SignMessageButton onPress={handleMessageButtonClick}>
          <SignMessageButtomText>
            Ainda não possui uma conta?
          </SignMessageButtomText>
          <SignMessageButtomTextBold>Cadastre-se</SignMessageButtomTextBold>
        </SignMessageButton>
      </Content>
    </Container>
  );
}
