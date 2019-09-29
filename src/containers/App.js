import React from "react";

import SearchBar from "../components/searchBar/SearchBar";
import MovieContent from "../components/movieContent/movieContent";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Search Movie Title" />
      <MovieContent />
    </div>
  );
}

export default App;
