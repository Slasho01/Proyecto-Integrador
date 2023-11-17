import { ADD_FAV, REMOVE_FAV } from "../actions/actions.js";
const initialState = {
  favorites: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      return { ...state, favorites: payload, allCharacters: payload };
    case "REMOVE_FAV":
      return { ...state, favorites: payload };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
