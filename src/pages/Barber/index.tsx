import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getBarber} from '../../services/getBarber';

import {
  Container,
  Text,
  Scroller,
  FakeSwipper,
  Content,
  UserInfoArea,
  ServiceArea,
  TestimonialArea,
  SwiperDot,
  SwipeActiveDot,
  SwipeItem,
  SwipeImage,
} from './styles';
import Swiper from 'react-native-swiper';

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
      <Scroller>
        {userInfo.photos && userInfo.photos.length > 0 ? (
          <Swiper
            style={{height: 240}}
            dot={<SwiperDot />}
            activeDot={<SwipeActiveDot />}
            paginationStyle={{top: 15, right: 15, bottom: 0, left: 0}}
            autoplay={true}>
            {userInfo.photos.map((item, key) => (
              <SwipeItem key={key}>
                <SwipeImage source={{uri: item.url}} resizeMode="cover" />
              </SwipeItem>
            ))}
          </Swiper>
        ) : (
          <FakeSwipper />
        )}
        <Content>
          <UserInfoArea />
          <ServiceArea />
          <TestimonialArea />
        </Content>
      </Scroller>
    </Container>
  );
}
