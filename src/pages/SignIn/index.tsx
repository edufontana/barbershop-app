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
import {SignInInput} from '../../components/SignInInput';

export function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  const handleMessageButtonClick = () => {
    navigation.navigate('SignUp');
  };

  const handleSignClick = () => {};

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
          <CustomButton OnPress={handleSignClick}>
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
