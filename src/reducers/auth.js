import {
  GET_AUTH,
  SET_AUTH,
  SET_USER,
  REMOVE_USER,
} from "../actions/authAction";

export default function authState(state = {}, action) {
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
    case SET_USER: {
      return {
        ...state,
        currentAuthor: action.payload,
      };
    }
    case REMOVE_USER: {
      return {
        ...state,
        currentAuthor: {},
      };
    }
    default:
      return state;
  }
}
