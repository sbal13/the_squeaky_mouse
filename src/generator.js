import parsedData from './parsedData'
import { phrases } from './data'
import Phrase from './Phrase'
import React from 'react'

class Generator extends React.Component {

    generateRandom = () => {
        console.log("ATTEMPT")
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

        let scrambled = firstHalf.concat(secondHalf).join(" ")
        this.props.changeTerm(scrambled)
    }


    getRandomNumber = (num) => {
        return Math.floor(Math.random() * num)
    }

    handleCopy = (event) => {
        event.target.select()
        document.execCommand("Copy");

        alert("Copied!")
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                {this.props.shareURL ? <input readOnly onClick={this.handleCopy} value={this.props.shareURL} /> : null}
                < Phrase phrase={this.props.scrambled}
                    motivationalPhrase={this.props.motivationalPhrase}
                    embedURL={this.props.embedURL}
                    handleClick={this.generateRandom} />
            </div>
        );
    }
}

export default Generator