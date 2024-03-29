import React from "react";
import { connect } from "react-redux";

import SingleSuggestion from "./singleSuggestion/singleSuggestion";
import { setMovie, setSuggestions, setInput } from "./../../../store/action";

import "./suggestions.scss";

const suggestions = ({ suggestions, setMovie, setSuggestions, setInput }) => {
  const maximumNumberOfSuggestions = 5;

  const handleSuggestionClick = singleSuggestion => {
    setMovie(singleSuggestion);
    setSuggestions();
    setInput("");
  };

  const renderedData = suggestions.map((singleSuggestion, index) => {
    if (index < maximumNumberOfSuggestions) {
      return (
        <SingleSuggestion
          click={() => handleSuggestionClick(singleSuggestion)}
          key={singleSuggestion.title}
          data={singleSuggestion}
        />
      );
    } else {
      return null;
    }
  });
  return <div className="suggestions">{renderedData}</div>;
};

const mapStateToProps = ({ suggestions }) => {
  return {
    suggestions: suggestions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMovie: movieData => dispatch(setMovie(movieData)),
    setSuggestions: () => dispatch(setSuggestions([])),
    setInput: val => dispatch(setInput(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(suggestions);
