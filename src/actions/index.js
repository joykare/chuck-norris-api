import axios from "axios";
import * as constants from "../constants";

export const jokeRequest = (category) => {
  return {
    type: constants.JOKE_GET_REQUEST,
    category
  };
}

export const jokeSuccess = (joke) => {
  return {
    type: constants.JOKE_GET_SUCCESS,
    joke
  };
}

export const jokeFailure = (error) => {
  return {
    type: constants.JOKE_GET_FAILURE,
    error
  };
}

export const categoriesRequest = () => {
  return {
    type: constants.CATEGORIES_GET_REQUEST
  };
}

export const categoriesSuccess = (categories) => {
  return {
    type: constants.CATEGORIES_GET_SUCCESS,
    categories
  };
}

export const categoriesFailure = (error) => {
  return {
    type: constants.CATEGORIES_GET_FAILURE,
    error
  };
}

export const fetchJokeCategories = () => {
  return (dispatch) => {
    dispatch(categoriesRequest());

    return (
      axios.get("https://api.chucknorris.io/jokes/categories")
      .then(response => {
        dispatch(categoriesSuccess(response.data));
      })
      .catch(error => {
        dispatch(categoriesFailure(error));
      })
    );
  };
}

export const fetchRandomJoke = (category) => {
  return (dispatch) => {
    dispatch(jokeRequest(category));

    return (
      axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then(response => {
        dispatch(jokeSuccess(response.data));
      })
      .catch(error => {
        dispatch(jokeFailure(error));
      })
    )
  }
}
