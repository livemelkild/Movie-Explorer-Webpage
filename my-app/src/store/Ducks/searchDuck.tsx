//action types
const UPDATE_SEARCH = 'UPDATE_SEARCH';


// Action creator
export function updateSearch(search = '') {
  return {
    type: UPDATE_SEARCH,
    payload: search
  };
}

const initialState = {
  payload: ""
}

// Reducer - finne ut hvilken metode som er relatert til staten som skla  bli kalt
export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
   case UPDATE_SEARCH:
      const newState = action.payload;
      return newState;
     default:
       return state;
  }
}
