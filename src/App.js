import React, { Component } from "react";
import "./App.css";

import Generator from "./Generator";
import { generateRandom } from "./wordGenerator";
import jwt from "jsonwebtoken";
import { motivationArray } from "./data";
import { API_KEY } from "./keys";

// const MY_URL = "http://localhost:3000"
const MY_URL = "www.thesqueakymouse.com";

class App extends Component {
  state = {
    searchTerm: "",
    scrambled: "",
    embedURL: "",
    motivationalPhrase: "",
    shareURL: "",
    firstPhrase: "",
    secondPhrase: ""
  };

  changeTerm = () => {
    const {
      scrambled,
      searchTerm,
      firstPhrase,
      secondPhrase
    } = generateRandom();

    console.log("****************************");
    console.log("First Phrase:", firstPhrase);
    console.log("Second Phrase:", secondPhrase);
    console.log("****************************");

    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchTerm}`
    )
      .then(res => res.json())
      .then(gifInfo => {
        let phrase = this.getMotivationalWord();

        let shareHash = jwt.sign(
          {
            s: scrambled,
            t: searchTerm,
            p: phrase,
            e: gifInfo.data.embed_url
          },
          "squeaky"
        );

        this.setState({
          shareURL: `${MY_URL}/${shareHash}`,
          scrambled,
          motivationalPhrase: phrase,
          searchTerm: searchTerm,
          embedURL: gifInfo.data.embed_url,
          firstPhrase: firstPhrase,
          secondPhrase: secondPhrase
        });
      });
  };

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  getMotivationalWord = () => {
    let word = this.shuffle(motivationArray)[0];
    let wordArray = word.split("");

    return wordArray.join(" · ").toUpperCase();
  };

  componentDidMount() {
    let token = window.location.pathname.replace("/", "");
    let decoded;
    if (token) {
      try {
        decoded = jwt.verify(token, "squeaky");

        this.setState(
          {
            scrambled: decoded.s,
            embedURL: decoded.e,
            shareURL: "",
            searchTerm: decoded.t,
            motivationalPhrase: decoded.p
          },
          this.fetchGif
        );
      } catch (error) {
        this.changeTerm("The Squeaky Mouse", "The Squeaky Mouse");
      }
    } else {
      this.changeTerm("The Squeaky Mouse", "The Squeaky Mouse");
    }
  }

  render() {
    return (
      <div className="App">
        <Generator
          embedURL={this.state.embedURL}
          motivationalPhrase={this.state.motivationalPhrase}
          changeTerm={this.changeTerm}
          shareURL={this.state.shareURL}
          scrambled={this.state.scrambled}
          firstPhrase={this.state.firstPhrase}
          secondPhrase={this.state.secondPhrase}
        />
      </div>
    );
  }
}

export default App;
