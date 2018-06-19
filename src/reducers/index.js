import { combineReducers } from 'redux';
import * as actionTypes from "../constants";

const categoryReducer = ( state = { isFetching: false, error: null, categories: [] }, action) => {
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

const jokeReducer = ( state = { isFetching: false, error: null, joke: {}, category:"" }, action) => {
  switch(action.type) {
    case actionTypes.JOKE_GET_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
        category: action.category
      })
    case actionTypes.JOKE_GET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        joke: action.joke,
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

const rootReducer = combineReducers({
  jokeReducer,
  categoryReducer
})

export default rootReducer;