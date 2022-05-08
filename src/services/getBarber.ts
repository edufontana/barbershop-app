import AsyncStorage from '@react-native-community/async-storage';
import {api} from './api';

export const getBarber = async id => {
  const token = await AsyncStorage.getItem('token');

  try {
    const req = await api.get(`barber/${id}?token=${token}`);
    return req;
  } catch (err) {
    return err;
  }
};
