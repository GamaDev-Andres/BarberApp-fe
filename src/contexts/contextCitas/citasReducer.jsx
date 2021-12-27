import types from "../../types/types";

export const citasReducer = (state, action) => {
  switch (action.type) {
    case types.citasGetCitas:
      console.log("llegue");
      console.log(action.payload);
      return {
        ...state,
        citas: action.payload,
      };
    default:
      return state;
  }
};
