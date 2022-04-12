export const initialState = {
  avatar: '',
  favorites: [],
  appointments: [],
};

export const userReducer = (state, actions) => {
  switch (actions.type) {
    case 'setAvatar':
      return {...state, avatar: actions.payload.avatar};

    default:
      return state;
  }
};
