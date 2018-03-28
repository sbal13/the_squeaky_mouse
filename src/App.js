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
import jwt from 'jsonwebtoken'


const API_KEY = "VD8euWlwM5g55j3YfYz9YUmRT8Cs1h9W"

class App extends Component {

	state = {
		searchTerm: "",
		scrambled: "",
		embedURL: "",
		shareHash: ""
	}

	changeTerm = (scrambled) => {
		fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${scrambled}`)
		.then(res=>res.json())
		.then(gifInfo => {

			let shareHash = jwt.sign({
				s: scrambled, 
				t: scrambled,
				e: gifInfo.data.embed_url
			}, "squeaky")

			this.setState({
				shareHash,
				scrambled,
				searchTerm: scrambled,
				embedURL: gifInfo.data.embed_url
			})
		})
	}

	componentDidMount(){
		let token = window.location.pathname.replace('/', "")
		if (token){
			let decoded = jwt.verify(token, "squeaky")
			this.setState({scrambled: decoded.s, embedURL: decoded.e, shareHash: token, searchTerm: decoded.t}, this.fetchGif)
		} else {
			this.changeTerm("The Squeaky Mouse")
		}
	}

  render() {
  	console.log
    return (
      <div className="App">
        <Header />
        <Generator changeTerm={this.changeTerm} shareHash={this.state.shareHash} scrambled={this.state.scrambled}/>
        <Gif url={this.state.embedURL}/>
      </div>
    );
  }
}

export default App;


//https://api.giphy.com/v1/gifs/translate?api_key=VD8euWlwM5g55j3YfYz9YUmRT8Cs1h9W&s=dude