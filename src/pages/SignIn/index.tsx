import React from 'react';
import {Text} from 'react-native';
import {Container} from './styles';

import BarberLogo from '../../assets/barber.svg';

export function SignIn() {
  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <SignInput />
        <SignInput />

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
    </Container>
  );
}
