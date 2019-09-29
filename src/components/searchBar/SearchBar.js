import React from "react";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";

import "./search.scss";
import { gatherMovieData, setSuggestions, setInput } from "../../store/action";
import Suggestions from "./suggestions/suggestions";

const searchBar = ({
  inputVal,
  placeholder,
  loadSuggestion,
  setSuggestions,
  setInput,
  loadMovie
}) => {
  const handleInputChange = event => {
    const { value } = event.target;
    setInput(value);

    if (value.trim().length > 0) {
      loadSuggestion(value);
    } else {
      setSuggestions();
    }
  };

  const handleSearch = inputVal => {
    loadMovie(inputVal);
    setInput("");
    setSuggestions();
    console.log(inputVal);
  };

  const handleEnter = event => {
    if (event.key === "Enter") {
      handleSearch(inputVal);
    }
  };

  return (
    <div className="search">
      <button onClick={() => handleSearch(inputVal)} className="search__button">
        <FaSearch />
      </button>
      <input
        onKeyDown={handleEnter}
        value={inputVal}
        onChange={handleInputChange}
        className="search__input"
        placeholder={placeholder}
      ></input>
      <Suggestions />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    loadSuggestion: text => dispatch(gatherMovieData("suggestion", text)),
    setSuggestions: () => dispatch(setSuggestions([])),
    setInput: val => dispatch(setInput(val)),
    loadMovie: text => dispatch(gatherMovieData("movie", text))
  };
};

const mapStateToProps = ({ inputVal }) => {
  return {
    inputVal: inputVal
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(searchBar);
