import parsedData from './parsedData'
import { phrases } from './data'
import Phrase from './Phrase'
import React from 'react'

const MY_URL = "http://localhost:3000"
class Generator extends React.Component {

    state = {
        phraseOne: "",
        phraseTwo: "",
        scrambled: "",
        reverseScrambled: ""
    }

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

		if(this.getRandomNumber(2)){
			firstHalf = [...words.slice(0, wordIndex), words[wordIndex]]
			secondHalf = secondPhraseWords.slice(location.wordIndex + 1)
		} else {
			firstHalf = [...secondPhraseWords.slice(0, location.wordIndex), secondPhraseWords[location.wordIndex]]
			secondHalf = words.slice(wordIndex + 1)
		}

		let wordsOverThreeFirst = firstHalf.filter(word => word.length > 3)
		let wordsOverThreeSecond = secondHalf.filter(word => word.length > 3)

		let first = wordsOverThreeFirst[this.getRandomNumber(wordsOverThreeFirst.length)] || ""
		let second = wordsOverThreeSecond[this.getRandomNumber(wordsOverThreeSecond.length)] || ""


		let searchTerm = first + " " + second

		let scrambled = firstHalf.concat(secondHalf).join(" ")
		this.props.changeTerm(scrambled)


	}

	getRandomNumber(num) {
		return Math.floor(Math.random() * num)
	}

	render() {
		// console.log(this.state)
		return (
			<div className="App">
				<Phrase phrase={this.props.scrambled} motivationalPhrase={this.props.motivationalPhrase} embedURL={this.props.embedURL} handleClick={this.generateRandom} />
				<a href={`${MY_URL}/${this.props.shareHash}`}>Share With Your Friends</a>
			</div>
		);
	}
}

export default Generator