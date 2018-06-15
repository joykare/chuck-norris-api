const INITIAL_STATE = {
  isFetching: false,
  error: null,
  joke: {}
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case actionType.JOKE_GET_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null
      })
    case actionType.JOKE_GET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        joke: action.joke
      })
    case actionType.JOKE_GET_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    default:
      return state
  }
}