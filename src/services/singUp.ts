import {api} from './api';

export const signUp = async (name, email, password) => {
  try {
    const req = await api.post('user', {
      headers: {},
      name,
      email,
      password,
    });
    return req;
  } catch (err) {
    console.log('errrou', err);
    return err;
  }
};
