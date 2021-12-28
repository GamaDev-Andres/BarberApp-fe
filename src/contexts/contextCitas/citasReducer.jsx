import types from "../../types/types";

export const citasReducer = (state, action) => {
  switch (action.type) {
    case types.citasGetCitas:
      return {
        ...state,
        citas: action.payload,
      };
    case types.citasDeleteCita:
      return {
        ...state,
        citas: state.citas.filter((cita) => cita._id !== action.payload),
      };
    default:
      return state;
  }
};
