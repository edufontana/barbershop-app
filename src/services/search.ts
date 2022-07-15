import AsyncStorage from '@react-native-community/async-storage';
import {api} from './api';

export const search = async barberName => {
  const token = await AsyncStorage.getItem('token');

  try {
    const req = await api.get(`search?q=${barberName}&token=${token}`);
    return req;
  } catch (err) {
    return err;
  }
};
