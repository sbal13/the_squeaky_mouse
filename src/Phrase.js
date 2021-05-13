import React, { useState } from "react";
import PhraseExplainer from "./PhraseExplainer";
import Gif from "./Gif";

const Phrase = props => {
  const { firstPhrase, secondPhrase, searchTerm } = props;
  const [isActive, setIsActive] = useState({ isActive: "" });
  const toggleExplainer = isActive => {
    isActive === true ? setIsActive("is-active") : setIsActive("");
  };

  return (
    <section className="hero is-small is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="box frame">
            <Gif embedURL={props.embedURL} />
            <h1 className="phrase-header">{props.motivationalPhrase}</h1>
            <PhraseExplainer
              isActive={isActive}
              toggleExplainer={toggleExplainer}
              firstPhrase={firstPhrase}
              secondPhrase={secondPhrase}
              searchTerm={searchTerm}
            />
            <hr />
            <div className="is-inline is-inline-flex">
              <h2 className="phrase-content" style={{ "margin-right": "10px" }}>
                {props.phrase}
              </h2>
              <button
                onClick={() => toggleExplainer(true)}
                className="button is-small"
              >
                <span className="icon is-small">
                  <i className="fas fa-search"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Phrase;
