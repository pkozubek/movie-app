import { gatherData } from "../api/api";

export const gatherMovieData = (type, text) => {
  return dispatch => {
    gatherData(type, text).then(resp => {
      const { message, movies } = resp;
      if (message === "Ok") {
        if (type === "suggestion") {
          dispatch(setSuggestions(movies));
        } else if (type === "movie") {
          let [movieData] = movies;
          if (movieData === undefined) movieData = null;
          dispatch(setMovie(movieData));
        }
      }
    });
  };
};

export const setSuggestions = gatheredSuggestions => {
  return {
    type: "SET_SUGGESTION",
    suggestions: gatheredSuggestions
  };
};

export const setMovie = movieData => {
  console.log("movie data", movieData);
  return {
    type: "SET_MOVIE",
    movie: movieData
  };
};

export const setInput = value => {
  return {
    type: "SET_INPUT",
    inputVal: value
  };
};
