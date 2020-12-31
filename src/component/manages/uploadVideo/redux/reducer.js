import { DELETE_VIDEO } from "./actions";
export function deleteVideoReducer(state = [], action) {
  switch (action.type) {
    case DELETE_VIDEO:
      return [...state, action.payload];

    default:
      return state;
  }
}
