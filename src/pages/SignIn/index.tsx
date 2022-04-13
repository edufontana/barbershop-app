import React from 'react';
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
import {SignInInput} from '../../components/SignInInput';

export function SignIn() {
  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <Content>
        <InputArea>
          <SignInInput IconSvg={EmailIcon} placeholder={'Digite seu e-mail'} />
          <SignInInput IconSvg={LockIcon} placeholder={'Digite sua senha'} />
          <CustomButton>
            <CustomButtomText>Login</CustomButtomText>
          </CustomButton>
        </InputArea>

        <SignMessageButton>
          <SignMessageButtomText>
            Ainda não possui uma conta?
          </SignMessageButtomText>
          <SignMessageButtomTextBold>Cadastre-se</SignMessageButtomTextBold>
        </SignMessageButton>
      </Content>
    </Container>
  );
}
