import React from "react";

const PhraseExplainer = props => {
  const { isActive, firstPhrase, secondPhrase, searchTerm } = props;

  return (
    <div className={`modal ${isActive}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <article className="message is-primary">
          <div className="message-header">
            <p>Phrase Explorer</p>
          </div>
          <div className="message-body">
            <p>
              <strong>First Phrase:</strong> {firstPhrase}
            </p>
            <p>
              <strong>Second Phrase:</strong> {secondPhrase}
            </p>
            <p>
              <strong>Gif search term:</strong> {searchTerm}
            </p>
          </div>
        </article>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => props.toggleExplainer(false)}
      ></button>
    </div>
  );
};

export default PhraseExplainer;
