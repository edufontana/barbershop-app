import React from 'react';
import {Stars} from '../Stars';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Avatar,
  InfoArea,
  UserName,
  SeeProfileButton,
  SeeProfileButtonText,
} from './styles';

interface Iprops {
  data: {
    name: string;
    id: string;
    stars: number;
    avatar: string;
  };
}

export function BarberItem({data}: Iprops) {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Barber', {
      id: data.id,
      avatar: data.avatar,
      name: data.name,
      stars: data.stars,
    });
  };

  return (
    <Container onPress={handleClick}>
      <Avatar source={{uri: data.avatar}} />
      <InfoArea>
        <UserName>{data.name}</UserName>

        <Stars stars={data.stars} showNumber={true} />

        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Container>
  );
}
