import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../actions/actions.js";
const initialState = {
  favorites: [],
  cards: [],
  filteredCards: [],
  sortOrder: 'A',
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      return { ...state, favorites: payload, allCharacters:payload, cards: payload };
    case "REMOVE_FAV":
      return { ...state, favorites: payload };
    case "FILTER":
      const filteredCharacters = state.allCharacters.filter(character => character.gender === payload);
      return {
        ...state,
        favorites: filteredCharacters,
        filteredCards: filteredCharacters,
      };;
    case "ORDER":
      const sortedCharacters = [...state.allCharacters];
      sortedCharacters.sort((a, b) => {
        if (payload === 'A') {
          return a.id - b.id; 
        } else if (payload === 'D') {
          return b.id - a.id; 
        }
        return 0;
      });
      return {
        ...state,
        favorites: sortedCharacters,
        sortOrder: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
