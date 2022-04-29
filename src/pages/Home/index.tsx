import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
} from './styles';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export function Home() {
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState('aaa');

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle>Encontre o seu barbeiro favorito</HeaderTitle>
          <SearchButton
            onPress={() => {
              navigation.navigate('Search');
            }}>
            <SearchIcon width="26" height="26" fill="#fff" />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            placeholder="onde você está?"
            placeholderTextColor={'#fff'}
            onChangeText={text => setLocationText(text)}
            value={locationText}
          />
          <LocationFinder>
            <MyLocationIcon width="24" height="24" fill="#fff" />
          </LocationFinder>
        </LocationArea>
      </Scroller>
    </Container>
  );
}
