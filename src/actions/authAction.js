export const GET_AUTH = "GET_AUTH";
export const SET_AUTH = "SET_AUTH";

export function getAuth() {
  return {
    type: GET_AUTH,
  };
}
export function setAuth() {
  console.log("Set Auth");
  return {
    type: SET_AUTH,
  };
}
