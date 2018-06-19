import * as actionTypes from "../constants";

const INITIAL_STATE = {
  isFetching: false,
  error: null,
  joke: {}
}

const jokeReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.JOKE_GET_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null
      })
    case actionTypes.JOKE_GET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        joke: action.joke
      })
    case actionTypes.JOKE_GET_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    default:
      return state
  }
}

export default jokeReducer;