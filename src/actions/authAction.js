export const GET_AUTH = "GET_AUTH";
export const SET_AUTH = "SET_AUTH";
export const SET_USER = "SET_USER";
export const REMOVE_USER = "REMOVE_USER";

export function getAuth() {
  return {
    type: GET_AUTH,
  };
}
export function setAuth() {
  // console.log("Set Auth");
  return {
    type: SET_AUTH,
  };
}
export function setUser(payload) {
  // console.log("Set Auth");
  return {
    type: SET_USER,
    payload: payload,
  };
}
export function removeUser() {
  // console.log("Set Auth");
  return {
    type: REMOVE_USER,
  };
}
