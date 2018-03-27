import React, { Component } from 'react';
import './App.css';
import { generateProverb } from "./generator"
import Header from "./Header"
import PhraseForm from "./PhraseForm"
import Phrase from "./Phrase"
import Gif from "./Gif"
import Generator from "./generator"
import data from './data'
import parsedData from './parsedData'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />

        <Generator />
        <Gif />
      </div>
    );
  }
}

export default App;
