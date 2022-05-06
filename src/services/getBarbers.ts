import {api} from './api';
import AsyncStorage from '@react-native-community/async-storage';

export const getBarbers = async (lat = null, lng = null, address = null) => {
  const token = await AsyncStorage.getItem('token');

  console.log(lat);

  try {
    const req = api.get(
      `barbers?token=${token}&lat=${lat}&lng=${lng}&address=${address}`,
    );
    return req;
  } catch (err) {
    return err;
  }
};
