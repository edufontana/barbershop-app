import React from 'react';

import {Container, TextInput} from './styles';
import {TextInputProps} from 'react-native';

interface Iprops extends TextInputProps {
  IconSvg: any;
}

export function SignInInput({IconSvg, ...rest}: Iprops) {
  return (
    <Container>
      <IconSvg width={24} height={24} fill={'#268596'} />
      <TextInput {...rest} />
    </Container>
  );
}
