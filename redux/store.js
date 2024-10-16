import { createStore } from "redux";
import { CREATE, DELETE, THEME, UPDATE } from "./action";

const initialState = {
  list: [],
  colorList: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return { ...state, list: [...state.list, action.payload] };
    case DELETE:
      return {
        ...state,
        list: state.list.filter((item) => item.id != action.payload),
      };
    case UPDATE:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id == action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    case THEME:
      return { ...state, colorList: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
