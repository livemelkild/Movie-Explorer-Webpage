//action types
const UPDATE_SEARCH = 'UPDATE_SEARCH';

// Reducer
const searchReducer = (state: StringState = '', action: CharacterAction ): StringState => {
  switch (action.type) {
   case UPDATE_SEARCH:

  }
}

// Action creator
export function updateSearch(search = '') {
  return {
    type: UPDATE_SEARCH,
    payload: search
  };
}