export const GET_IMAGES = "GET_IMAGES";
export const EDIT_IMAGES = "EDIT_IMAGES";

export function getImages() {
  return {
    type: GET_IMAGES,
  };
}

export function editImages(payload) {
  return {
    type: EDIT_IMAGES,
    payload: payload,
  };
}
