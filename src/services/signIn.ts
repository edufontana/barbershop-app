import {api} from './api';

interface Iprops {
  email: string;
  password: string;
}

export const signIn = async ({email, password}: Iprops) => {
  try {
    const req = await api.post('auth/login', {
      headers: {},
      email,
      password,
    });
    return req;
  } catch (err) {
    console.log('errrou', err);
    return err;
  }
};
