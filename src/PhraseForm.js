import React from "react";

const PhraseForm = props => {
  return (
    <button
      onClick={props.handleClick}
      className="button is-small is-black generate"
    >
      <span>Generate</span>
      <span className="icon is-small">
        <i className="fas fa-chevron-circle-right"></i>
      </span>
    </button>
  );
};

export default PhraseForm;
