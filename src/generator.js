import parsedData from './parsedData'
import { phrases } from './data'
import Phrase from './Phrase'
import React from 'react'

class Generator extends React.Component {

    generateRandom = () => {
        let phraseIndex = this.getRandomNumber(101)
        let phrase = phrases[phraseIndex]

        let noPunctuation = phrase.replace(/([^a-z\sA-Z])/g, "")
        let wordsNoPunctuation = noPunctuation.split(" ")
        let words = phrase.split(" ")

        let wordIndex = this.getRandomNumber(wordsNoPunctuation.length)
        let matchingWord = wordsNoPunctuation[wordIndex]

        let wordData = parsedData[matchingWord.toLowerCase()]

        let location = wordData[this.getRandomNumber(wordData.length)]
        let secondPhraseIndex = location.phraseIndex
        let secondPhrase = phrases[secondPhraseIndex]
        let secondPhraseWords = secondPhrase.split(" ")


        if (secondPhraseIndex === phraseIndex
            || wordIndex === 0
            || wordIndex === words.length - 1
            || location.wordIndex === 0
            || location.wordIndex === secondPhraseWords.length - 1
            || wordData.length <= 1
        ) {
            return this.generateRandom()
        }


        let firstHalf;
        let secondHalf;

        if (this.getRandomNumber(2)) {
            firstHalf = [...words.slice(0, wordIndex), words[wordIndex]]
            secondHalf = secondPhraseWords.slice(location.wordIndex + 1)
        } else {
            firstHalf = [...secondPhraseWords.slice(0, location.wordIndex), secondPhraseWords[location.wordIndex]]
            secondHalf = words.slice(wordIndex + 1)
        }

        let allWords = firstHalf.concat(secondHalf)

        let sortedWords = allWords.slice().sort((a, b) => b.length - a.length)

        let scrambled = allWords.join(" ")


        if (phrases.includes(scrambled)) {
            return this.generateRandom()
        }
        this.props.changeTerm(scrambled, sortedWords[0])
    }


    getRandomNumber = (num) => {
        return Math.floor(Math.random() * num)
    }

    handleCopy = (event) => {
       

	if (navigator.share) {
		  navigator.share({
		      title: 'The Squeaky Mouse',
		      text: 'Gets the Wheel',
		      url: this.props.shareURL,
		  })
		    .then(() => console.log(`Copied! \n
	        _..----.._    _
	        .'  .--.    "-.(0)
	'-.__.-'"'=:|   ,  _)_ \__ . c\'-..
	         '''------'---''---'-"

	                                           
	`))
		    .catch((error) => console.log('Error sharing', error));
	} else {
		 event.target.select()
        document.execCommand("Copy");

	        alert(`Copied! \n
	        _..----.._    _
	        .'  .--.    "-.(0)
	'-.__.-'"'=:|   ,  _)_ \__ . c\'-..
	         '''------'---''---'-"

	                                           
	`)
	}
    }

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
                                                
    `)
        console.log("By @meryldakin and @sbal13")
        console.log("Inspired by @johann")
    }





    render() {

        return (
            <div className="App">
                <div className="field level">
                    <div className="level-item has-text-centered">
                        <h1 className="nav-header">THE SQUEAKY MOUSE</h1>
                    </div>
                    <div className="level-item has-text-centered">
                        <figure className="image is-48x48 hoveringMouse" onClick={this.showAuthors} >
                            <img alt="mouse" src="https://d30y9cdsu7xlg0.cloudfront.net/png/13583-200.png" />
                        </figure>

                        <p className="control has-icons-left has-icons-right ">

                            {this.props.shareURL ? <input className="input is-rounded is-small is-primary" readOnly onClick={this.handleCopy} value={this.props.shareURL} /> : null}

                            <span className="icon is-small is-right">
                                <i className="fas fa-copy hoveringMouse"></i>
                            </span>
                        </p>
                    </div>
                    <div className="level-item has-text-centered">
                        <h1 className="nav-content" >When it rains, it drains.</h1>
                    </div>
                </div>
                <Phrase phrase={this.props.scrambled}
                    motivationalPhrase={this.props.motivationalPhrase}
                    embedURL={this.props.embedURL}
                    handleClick={this.generateRandom} />
            </div>
        );
    }
}

export default Generator