import { userActionsTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

// state= INITITAL_STATE -> default parameter jadinya kalo misal state = null  maka akan di set sebagai INITITAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionsTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
