import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getBarber} from '../../services/getBarber';
import {Stars} from '../../components/Stars';
import FavoriteIcon from '../../assets/favorite.svg';
import BackIcon from '../../assets/back.svg';
import NavPreIcon from '../../assets/nav_prev.svg';

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
  UserAvatar,
  UserInfo,
  UserInfoName,
  UserFavButton,
  BackButton,
  LoadingIcon,
  ServicesTitle,
  ServiceItem,
  ServiceInfo,
  ServiceName,
  ServicePrice,
  ServiceChooseButton,
  ServiceChooseBtnText,
  TestimonialItem,
  TestimonialInfo,
  TestimonialName,
  TestimonialBody,
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
    setLoading(true);
    const getBarberInfo = async () => {
      const req = await getBarber(userInfo.id);

      if (req.data.error === '') {
        setUserInfo(req.data.data);
      } else {
        console.log('error', req.data.error);
      }
    };
    setLoading(false);
    console.log(userInfo);
    getBarberInfo();
  }, []);

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Scroller>
        {userInfo.photos && userInfo.photos.length > 0 ? (
          <Swiper
            style={{height: 240}}
            dot={<SwiperDot />}
            activeDot={<SwipeActiveDot />}
            paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
            autoplay={true}>
            {userInfo.photos.map((item, key) => (
              <SwipeItem key={key}>
                <SwipeImage
                  source={{
                    uri: item.url,
                  }}
                  resizeMode="cover"
                />
              </SwipeItem>
            ))}
          </Swiper>
        ) : (
          <FakeSwipper />
        )}
        <Content>
          <UserInfoArea>
            <UserAvatar source={{uri: userInfo.avatar}} />
            <UserInfo>
              <UserInfoName>{userInfo.name}</UserInfoName>
              <Stars stars={userInfo.stars} showNumber={true} />
            </UserInfo>
            <UserFavButton>
              <FavoriteIcon width="24" height="24" fill="#ff0000" />
            </UserFavButton>
          </UserInfoArea>

          {loading && <LoadingIcon size="large" color="#000000" />}

          {userInfo.services && (
            <ServiceArea>
              <ServicesTitle>Lista de serviços</ServicesTitle>

              {userInfo.services.map((item, key) => (
                <ServiceItem key={key}>
                  <ServiceInfo>
                    <ServiceName>{item.name}</ServiceName>
                    <ServicePrice>R$ {item.price}</ServicePrice>
                  </ServiceInfo>
                  <ServiceChooseButton>
                    <ServiceChooseBtnText>Agendar</ServiceChooseBtnText>
                  </ServiceChooseButton>
                </ServiceItem>
              ))}
            </ServiceArea>
          )}

          {userInfo.testimonials && userInfo.testimonials.length > 0 && (
            <TestimonialArea>
              <Swiper
                style={{height: 110}}
                showsPagination={false}
                showsButtons={true}
                prevButton={<NavPreIcon width="35" height="35" fill="#000" />}
                nextButton={<NavPreIcon width="35" height="35" fill="#000" />}>
                {userInfo.testimonials.map((item, key) => (
                  <TestimonialItem key={key}>
                    <TestimonialInfo>
                      <TestimonialName>{item.name}</TestimonialName>
                      <Stars stars={item.rate} showNumber={false} />
                    </TestimonialInfo>
                    <TestimonialBody>{item.body}</TestimonialBody>
                  </TestimonialItem>
                ))}
              </Swiper>
            </TestimonialArea>
          )}
        </Content>
      </Scroller>
      <BackButton onPress={handleBackButton}>
        <BackIcon width="44" height="44" fill="#fff" />
      </BackButton>
    </Container>
  );
}
