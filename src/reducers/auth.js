import { GET_AUTH, SET_AUTH } from "../actions/authAction";

export default function authState(state = "", action) {
  switch (action.type) {
    case GET_AUTH: {
      return { auth: false };
    }
    case SET_AUTH: {
      //console.log(state);
      return {
        auth: !state.auth,
      };
    }
    default:
      return state;
  }
}
