import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getBarber} from '../../services/getBarber';

import {Container, Text} from './styles';

export function Barber() {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(userInfo.id);
    setLoading(true);
    const getBarberInfo = async () => {
      const {data} = await getBarber(userInfo.id);

      if (data.error === '') {
        setUserInfo(data);
      } else {
        console.log(data.error);
      }
    };
    setLoading(false);

    getBarberInfo();
  }, []);

  return (
    <Container>
      <Text>{userInfo.name}</Text>
    </Container>
  );
}
