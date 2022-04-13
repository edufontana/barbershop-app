import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
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
import PersonIcon from '../../assets/person.svg';
import {SignInInput} from '../../components/SignInInput';

export function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  const handleMessageButtonClick = () => {
    navigation.navigate('SingIn');
  };

  const handleSignClick = () => {};

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <Content>
        <InputArea>
          <SignInInput
            IconSvg={PersonIcon}
            placeholder={'Digite seu nome'}
            value={name}
            onChangeText={t => setName(t)}
          />
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
          <CustomButton OnPress={handleSignClick}>
            <CustomButtomText>Cadastrar</CustomButtomText>
          </CustomButton>
        </InputArea>

        <SignMessageButton onPress={handleMessageButtonClick}>
          <SignMessageButtomText>Já possui uma conta?</SignMessageButtomText>
          <SignMessageButtomTextBold>Faça Login</SignMessageButtomTextBold>
        </SignMessageButton>
      </Content>
    </Container>
  );
}
