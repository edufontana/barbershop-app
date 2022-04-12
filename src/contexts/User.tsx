import React, {useReducer, createContext} from 'react';
import {initialState, userReducer} from '../reducers/UserReducer';

export const UserContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const UserContext = createContext();

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};
