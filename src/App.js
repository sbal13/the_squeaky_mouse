import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { generateProverb } from "./generator"
import Header from "./Header"
import PhraseForm from "./PhraseForm"
import Phrase from "./Phrase"
import Gif from "./Gif"

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <PhraseForm />
        <Phrase />
        <Gif />
      </div>
    );
  }
}

export default App;
