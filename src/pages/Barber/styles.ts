import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Text = styled.Text`
  color: white;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const FakeSwipper = styled.View``;

export const Content = styled.View`
  background-color: #fff;
  border-top-left-radius: 50px;
  margin-top: -50px;
  height: 400px;
`;

export const UserInfoArea = styled.View``;

export const ServiceArea = styled.View``;

export const TestimonialArea = styled.View``;

export const SwiperDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin: 3px;
`;

export const SwipeActiveDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 5px;
  margin: 3px;
`;

export const SwipeItem = styled.View`
  flex: 1;
  background-color: #63c2d1;
`;

export const SwipeImage = styled.Image`
  width: 100%;
  height: 240px;
`;
