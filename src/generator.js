import parsedData from './parsedData'
import data from './data'
import Phrase from './Phrase'

import React from 'react'

class Generator extends React.Component {


    state = {
        phraseOne: "",
        phraseTwo: "",
        scrambled: "",
        reverseScrambled: ""
    }

    componentDidMount() {
        console.log(data)
        console.log(parsedData)
    }

    generateRandom = () => {
        console.log("ATTEMPT")
        let phraseIndex = this.getRandomNumber(101)
        let phrase = data[phraseIndex]

        let noPunctuation = phrase.replace(/([^a-z\sA-Z])/g, "")
        let wordsNoPunctuation = noPunctuation.split(" ")
        let words = phrase.split(" ")

        let wordIndex = this.getRandomNumber(wordsNoPunctuation.length)
        let matchingWord = wordsNoPunctuation[wordIndex]

        let wordData = parsedData[matchingWord.toLowerCase()]

        let location = wordData[this.getRandomNumber(wordData.length)]
        let secondPhraseIndex = location.phraseIndex
        let secondPhrase = data[secondPhraseIndex]
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



        let scrambled = [...words.slice(0, wordIndex), words[wordIndex].toLowerCase(), ...secondPhraseWords.slice(location.wordIndex + 1)].join(" ")
        let reverseScrambled = [...secondPhraseWords.slice(0, location.wordIndex), secondPhraseWords[location.wordIndex].toLowerCase(), ...words.slice(wordIndex + 1)].join(" ")




        this.setState({
            phraseOne: phrase,
            phraseTwo: secondPhrase,
            scrambled: scrambled,
            reverseScrambled: reverseScrambled
        })


    }

    getRandomNumber(num) {
        return Math.floor(Math.random() * num)
    }

    render() {
        console.log(this.state)
        return (
            <div className="App">
                <Phrase phrase={this.state.scrambled} handleClick={this.generateRandom} />

            </div>
        );
    }
}

export default Generator