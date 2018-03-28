import React, { Component } from 'react';
import './App.css';
import { generateProverb } from "./generator"
import Header from "./Header"
import PhraseForm from "./PhraseForm"
import Phrase from "./Phrase"

import Generator from "./generator"
import { phrases } from './data'
import parsedData from './parsedData'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />


        <Generator />
      </div>
    );
  }
}

export default App;
