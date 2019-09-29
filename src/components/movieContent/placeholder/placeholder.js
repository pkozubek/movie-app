import React from "react";
import { FaVideo } from "react-icons/fa";

import "./placeholder.scss";

const placeholder = () => {
  return (
    <div className="placeholder">
      <FaVideo className="placeholder__icon" />
      <p className="placeholder__text">Search for some movie!</p>
      <p className="placeholder__text">
        Remember that not every movie is in database
      </p>
    </div>
  );
};

export default placeholder;
