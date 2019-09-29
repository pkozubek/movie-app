import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import "./rating.scss";

const rating = ({ number }) => {
  const maxNumberOfStars = 10;
  const renderedStars = [...Array(number)].map((e, index) => {
    return <FaStar key={`rated${index}`} />;
  });

  const emptyStars =
    maxNumberOfStars - number > 0
      ? [...Array(maxNumberOfStars - number)].map((e, index) => {
          return <FaRegStar key={`notrated${index}`} />;
        })
      : null;

  return (
    <div className="rating">
      {renderedStars}
      {emptyStars}
    </div>
  );
};

export default rating;
