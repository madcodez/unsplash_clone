import { GET_IMAGES, EDIT_IMAGES } from "../actions/imageAction";
import images from "../data";

const initialState = {
  images,
};

export default function imagesState(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES: {
      return {
        ...state,
      };
    }
    case EDIT_IMAGES: {
      //console.log(action.payload);
      const index = state.images.findIndex(
        (image) => image.id == action.payload.id
      );
      return {
        ...state,
        images: [
          ...images.slice(0, index),
          action.payload,
          ...images.slice(index + 1),
        ],
      };
    }
    default:
      return state;
  }
}
