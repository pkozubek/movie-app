import axios from "axios";

const SUGGESTION_URL =
  "https://movie-server-pk.herokuapp.com/movie/suggestion/";
const MOVIE_URL = "https://movie-server-pk.herokuapp.com/movie/name/";

export async function gatherData(purpose, val) {
  const localUrl = purpose === "movie" ? MOVIE_URL + val : SUGGESTION_URL + val;

  const data = await axios.get(localUrl).then(({ data }) => {
    return data;
  });

  return data;
}
