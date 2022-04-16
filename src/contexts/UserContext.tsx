import React, {useReducer, createContext} from 'react';
import {initialState, userReducer} from '../reducers/UserReducer';

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};
