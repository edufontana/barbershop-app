import axios from 'axios';
import {api} from './api';

export const checkToken = async ({token}) => {
  try {
    const req = await api.post('auth/refresh', {
      headers: {},
      token,
    });
    return req;
  } catch (err) {
    console.log('errrou', err);
    return err;
  }
};
