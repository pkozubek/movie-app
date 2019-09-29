import axios from "axios";

const SUGGESTION_URL = "http://localhost:6001/movie/suggestion/";
const MOVIE_URL = "http://localhost:6001/movie/name/";

export async function gatherData(purpose, val) {
  const localUrl = purpose === "movie" ? MOVIE_URL + val : SUGGESTION_URL + val;

  const data = await axios.get(localUrl).then(({ data }) => {
    return data;
  });

  return data;
}
