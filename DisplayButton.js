// Inside DisplayHeader.js
// Inside your component
// Inside DisplayButton.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DisplayButton = ({ handleDisplayClick }) => {
  return (
    <button className="display-button" onClick={handleDisplayClick}>
      Display
      <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
    </button>
  );
};

export default DisplayButton;
