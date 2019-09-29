import React from "react";
import { connect } from "react-redux";

import "./movie.scss";
import Rating from "./rating/rating";

const movieContent = ({ movie }) => {
  let renderedData = "Choose some movie!";

  if (movie != null) {
    const { title, image, summary, genre, rating } = movie;
    renderedData = (
      <>
        <img alt={title} className="movie__image" src={image}></img>
        <div className="movie-description">
          <h1 className="movie-description__title">{title}</h1>
          <h2>Summary</h2>
          <p>{summary}</p>
          <h2>Genre</h2>
          <p>{genre.join(",")}</p>
          <h2>Rating</h2>
          <Rating number={Number(rating)} />
        </div>
      </>
    );
  }

  return <div className="movie">{renderedData}</div>;
};

const mapStateToProps = ({ movie }) => {
  return {
    movie: movie
  };
};

export default connect(mapStateToProps)(movieContent);
