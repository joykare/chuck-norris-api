import axios from "axios";

export const jokeRequest = () => {
  return {
    type: constants.JOKE_GET_REQUEST
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

export const fetchDoc = () => {
  return (dispatch) => {
    dispatch(jokeRequest());

    return (
      axios.get("https://api.chucknorris.io/jokes/random")
      .then(response => {
        console.log("response", response);
        dispatch(jokeSuccess(response.body));
      }).catch(error => {
        console.log("error", error);
        dispatch(jokeFailure(error));
      })
    );
  };
}
