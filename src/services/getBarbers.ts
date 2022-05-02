import {api} from './api';
import AsyncStorage from '@react-native-community/async-storage';

export const getBarbers = async () => {
  const token = await AsyncStorage.getItem('token');

  try {
    const req = api.get(`barbers?token=${token}`);
    return req;
  } catch (err) {
    return err;
  }
};
