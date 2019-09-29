import React from "react";

import "./singleSuggestion.scss";

const singleSuggestion = ({ data, click }) => {
  const { title, image } = data;
  return (
    <div onClick={click} className="suggestion">
      <img alt={title} className="suggestion__image" src={image}></img>
      <p className="suggestion__title">{title}</p>
    </div>
  );
};

export default singleSuggestion;
