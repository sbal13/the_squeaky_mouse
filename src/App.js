import React, { Component } from 'react';
import './App.css';

import Generator from "./generator"
import jwt from 'jsonwebtoken'
import { motivationArray } from "./data"
import { API_KEY, GOOGLE_API_KEY } from './keys'

// const MY_URL = "http://localhost:3000"
const MY_URL = "https://the-squeaky-mouse.herokuapp.com"

class App extends Component {

  state = {
    searchTerm: "",
    scrambled: "",
    embedURL: "",
    motivationalPhrase: "",
    shareURL: ""
  }

  changeTerm = (scrambled, searchTerm) => {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchTerm}`)
      .then(res => res.json())
      .then(gifInfo => {

        let phrase = this.getMotivationalWord()

        let shareHash = jwt.sign({
          s: scrambled,
          t: searchTerm,
          p: phrase,
          e: gifInfo.data.embed_url
        }, "squeaky")

        fetch(`https://www.googleapis.com/urlshortener/v1/url?key=${GOOGLE_API_KEY}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "longUrl": `${MY_URL}/${shareHash}`
          })
        })
          .then(res => res.json())
          .then(res => {
            this.setState({
              shareURL: res.id,
              scrambled,
              motivationalPhrase: phrase,
              searchTerm: searchTerm,
              embedURL: gifInfo.data.embed_url
            })
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
    let decoded;
    if (token) {
      try {
        decoded = jwt.verify(token, "squeaky")



        this.setState({
          scrambled: decoded.s,
          embedURL: decoded.e,
          shareURL: "",
          searchTerm: decoded.t,
          motivationalPhrase: decoded.p
        }, this.fetchGif)
      } catch (error) {
        this.changeTerm("The Squeaky Mouse", "The Squeaky Mouse")
      }
    } else {
      this.changeTerm("The Squeaky Mouse", "The Squeaky Mouse")
    }
  }

  render() {

    return (
      <div className="App">

        <Generator embedURL={this.state.embedURL}
          motivationalPhrase={this.state.motivationalPhrase}
          changeTerm={this.changeTerm}
          shareURL={this.state.shareURL}
          scrambled={this.state.scrambled} />
      </div>
    );
  }
}

export default App;


//https://api.giphy.com/v1/gifs/translate?api_key=VD8euWlwM5g55j3YfYz9YUmRT8Cs1h9W&s=dude