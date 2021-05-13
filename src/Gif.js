import React from "react";

const Gif = props => {
  return (
    <section className="hero is-medium is-primary is-bold">
      <div className="">
        <div className="gif">
          <iframe
            src={props.embedURL}
            width="400"
            height="230"
            frameBorder="0"
            title="gif"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Gif;
