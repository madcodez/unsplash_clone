import { GET_AUTH, SET_AUTH } from "../actions/authAction";

const initialState = {
  auth: false,
};

export default function authState(state = initialState, action) {
  switch (action.type) {
    case GET_AUTH: {
      return {
        ...state,
      };
    }
    case SET_AUTH: {
      console.log(state);
      return {
        auth: true,
      };
    }
    default:
      return state;
  }
}
