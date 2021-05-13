import Phrase from "./Phrase";
import PhraseForm from "./PhraseForm";
import React from "react";

class Generator extends React.Component {
  handleCopy = event => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
    } else {
      event.target.select();
      document.execCommand("copy");

      alert("Copied!");
    }
  };

  showAuthors = () => {
    console.log(`
             __             _,-"~^"-.
           _// )      _,-"~\`         \`.
         ." ( /\`"-,-"\`                 ;
        / 6                             ;
       /           ,             ,-"     ;
      (,__.--.      \           /        ;
       //'   /\`-.\   |          |        \`._________
         _.-'_/\`  )  )--...,,,___\     \-----------,)
       ((("~\` _.-'.-'           __\`-.   )         //
             ((("\`             (((---~"\`         //
                                                ((______

    `);
    console.log("By @meryldakin and @sbal13");
    console.log("Inspired by @johann");
  };

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="level" style={{ marginBottom: 10 }}>
          <div className="level-item has-text-centered">
            <h1 className="nav-header">THE SQUEAKY MOUSE</h1>
          </div>
          <div className="level-item has-text-centered">
            <figure
              className="image is-48x48 hoveringMouse"
              onClick={this.showAuthors}
            >
              <img
                alt="mouse"
                src="https://d30y9cdsu7xlg0.cloudfront.net/png/13583-200.png"
              />
            </figure>

            {this.props.shareURL ? (
              <p className="control has-icons-left has-icons-right ">
                <input
                  className="input is-rounded is-small is-primary"
                  readOnly
                  onClick={this.handleCopy}
                  value={this.props.shareURL}
                />
                <span className="icon is-small is-right">
                  <i className="fas fa-copy hoveringMouse"></i>
                </span>
              </p>
            ) : null}
          </div>
          <div className="level-item has-text-centered">
            <h1 className="nav-content">When it rains, it drains.</h1>
          </div>
        </div>
        <PhraseForm handleClick={this.props.changeTerm} />
        <Phrase
          phrase={this.props.scrambled}
          motivationalPhrase={this.props.motivationalPhrase}
          embedURL={this.props.embedURL}
          firstPhrase={this.props.firstPhrase}
          secondPhrase={this.props.secondPhrase}
          searchTerm={this.props.searchTerm}
        />
      </div>
    );
  }
}

export default Generator;
