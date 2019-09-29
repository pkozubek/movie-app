const initialState = {
  suggestions: [],
  movie: null,
  inputVal: ""
};

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case "SET_SUGGESTION":
      return { ...state, suggestions: action.suggestions };
    case "SET_MOVIE":
      return { ...state, movie: action.movie };
    case "SET_INPUT":
      return { ...state, inputVal: action.inputVal };
    default:
      return state;
  }
};

export default reducer;
