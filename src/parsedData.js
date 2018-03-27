import data from './data'


let final = {}

data.forEach((phrase, phraseIndex) => {
	let noPunctuation = phrase.replace(/([^a-z\sA-Z])/g, "")

	let words = noPunctuation.split(" ")

	words.forEach((word, wordIndex) => {
		let lower = word.toLowerCase()
		if (!final[lower]){
			final[lower] = []
		}

		final[lower].push({phraseIndex, wordIndex})
	})
})

export default final