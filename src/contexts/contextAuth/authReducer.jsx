import types from "../../types/types";

const authReducer = (state, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case types.authRefreshToken:
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default authReducer;
