import React, {useEffect, useState} from 'react';
import {Platform, RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import {getBarbers} from '../../services/getBarbers';
import {BarberItem} from '../../components/BarberItem';

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
  LoadingIcon,
  ListArea,
} from './styles';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export function Home() {
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState('');
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleLocationFinder = async () => {
    setCoords(null);

    const result = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );

    setLoading(true);
    setLocationText('');
    setList([]);
    if (result === 'granted') {
      Geolocation.getCurrentPosition(info => {
        setCoords(info.coords);
      });
    }
    getBarbersResquet();
  };

  const onRefresh = () => {
    setRefreshing(false);
    getBarbersResquet();
  };

  const handleSearch = async () => {
    setCoords(null);
    getBarbersResquet();
  };

  const getBarbersResquet = async () => {
    setLoading(true);
    setList([]);

    let lat = null;
    let lng = null;

    if (coords) {
      lat = coords.latitude;
      lng = coords.longuitude;
    }

    const response = await getBarbers(lat, lng, locationText);
    console.log(response.data.data);

    if (response.data.error === '') {
      if (response.data.loc) {
        setLocationText(response.data.loc);
      }

      setList(response.data.data);
    } else {
      alert(response.error);
    }

    setLoading(false);
  };

  useEffect(() => {
    getBarbersResquet();
  }, []);

  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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
            onEndEditing={handleSearch}
            onBlur={handleSearch}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width="24" height="24" fill="#fff" />
          </LocationFinder>
        </LocationArea>
        {loading && <LoadingIcon size="large" color="#fff" />}

        <ListArea>
          {list.map((item, k) => (
            <BarberItem key={k} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
}
