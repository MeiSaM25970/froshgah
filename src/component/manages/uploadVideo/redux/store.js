import { createStore } from "redux";
import { deleteVideoReducer } from "./reducer";
export const deleteVideoStore = createStore(deleteVideoReducer);
