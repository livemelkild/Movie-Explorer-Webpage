import {
  MovieDispatchTypes,
  MovieType,
  MOVIE_LOADING,
  MOVIE_SUCCESS,
  MOVIE_FAIL}
  from "../Actions/MovieActionTypes";

interface DefaultStateI {
  loading: boolean,
  //uses ? to make it optional
  movie?: MovieType

};

const defaultState: DefaultStateI =  {
  loading: false
};
// endre any type senere
const movieReducer = (state: DefaultStateI = defaultState , action: MovieDispatchTypes): DefaultStateI => {
  //here everything is handeled by our reducer
  switch (action.type) {
    case MOVIE_FAIL:
    return {
      loading: false
    }
    case MOVIE_LOADING:
    return {
      loading: true
    }
    case MOVIE_SUCCESS:
    return {
      loading: false,
      movie: action.payload
    }
    default:
      return state
  }
};

export default movieReducer;
