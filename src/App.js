import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import Generator from "./generator"
import { motivationArray } from './data'
import jwt from 'jsonwebtoken'
import { API_KEY } from './keys'

class App extends Component {

  state = {
    searchTerm: "",
    scrambled: "",
    embedURL: "",
    motivationalPhrase: "",
    shareHash: ""
  }

  changeTerm = (scrambled) => {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${scrambled}`)
      .then(res => res.json())
      .then(gifInfo => {

        let phrase = this.getMotivationalWord(
        )
        let shareHash = jwt.sign({
          s: scrambled,
          t: scrambled,
          p: phrase,
          e: gifInfo.data.embed_url
        }, "squeaky")

        this.setState({
          shareHash,
          scrambled,
          motivationalPhrase: phrase,
          searchTerm: scrambled,
          embedURL: gifInfo.data.embed_url
        })
      })
  }

  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  getMotivationalWord = () => {
    let word = this.shuffle(motivationArray)[0]
    let wordArray = word.split("")

    return wordArray.join(" · ").toUpperCase()
  }

  componentDidMount() {
    let token = window.location.pathname.replace('/', "")
    if (token) {
      let decoded = jwt.verify(token, "squeaky")
      this.setState({
        scrambled: decoded.s,
        embedURL: decoded.e,
        shareHash: token,
        searchTerm: decoded.t,
        motivationalPhrase: decoded.p
      }, this.fetchGif)
    } else {
      this.changeTerm("The Squeaky Mouse Gets the Wheel")
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Generator embedURL={this.state.embedURL} motivationalPhrase={this.state.motivationalPhrase} changeTerm={this.changeTerm} shareHash={this.state.shareHash} scrambled={this.state.scrambled} />
      </div>
    );
  }
}

export default App;


//https://api.giphy.com/v1/gifs/translate?api_key=VD8euWlwM5g55j3YfYz9YUmRT8Cs1h9W&s=dude