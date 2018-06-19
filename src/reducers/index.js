import * as actionTypes from "../constants";

const INITIAL_STATE = {
  isFetching: false,
  error: null,
  categories: []
}

const jokeReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.CATEGORIES_GET_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null
      })
    case actionTypes.CATEGORIES_GET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        categories: action.categories
      })
    case actionTypes.CATEGORIES_GET_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    default:
      return state
  }
}

export default jokeReducer;