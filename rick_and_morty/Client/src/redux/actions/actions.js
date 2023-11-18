import axios from "axios";
export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'

/*export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return (dispatch) => {
     axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
           type: 'ADD_FAV',
           payload: data,
        });
     });
  };
};
  export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
    };
  };
*/
export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav'
   try {
      return async (dispatch) => {
         const { data } = await axios.post(endpoint, character)
         return dispatch({
            type: 'ADD_FAV',
            payload: data,
         })
      }
   } catch (error) {
      return console.error(error);
   }
}
export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   try {

      return async (dispatch) => {
         const { data } = await axios.delete(endpoint)
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
         })
      }
   } catch (error) {
      return console.error(error);
   }
}
export const filterCards = (gender) => {
   return (dispatch) => {
      return dispatch({
         type: 'FILTER',
         payload: gender,
      });
   }
};
export const orderCards = (order) => {
   return (dispatch) => {
      return dispatch({
         type: 'ORDER',
         payload: order,
      });
   }
};
/*   module.exports = {
    ADD_FAV,
    REMOVE_FAV,
  }; */