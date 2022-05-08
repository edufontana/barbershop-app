import AsyncStorage from '@react-native-community/async-storage';
import {api} from './api';

export const logout = async () => {
  const token = await AsyncStorage.getItem('token');

  try {
    const req = await api.post('auth/logout', {
      headers: {},
      token,
    });
    return req;
  } catch (err) {
    console.log('errrou', err);
    return err;
  }
};
