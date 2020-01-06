import parsedData from "./parsedData";
import { phrases } from "./data";

const getRandomNumber = num => {
  return Math.floor(Math.random() * num);
};

const getMatchingWordIndex = phrase => {
  let randomNum = Math.floor(Math.random() * phrase.length);
  if (randomNum < 3) {
    getMatchingWordIndex(phrase.length);
  }
  return randomNum;
};

export const generateRandom = () => {
  let phraseIndex = getRandomNumber(phrases.length);
  let firstPhrase = phrases[phraseIndex];

  let noPunctuation = firstPhrase.replace(/([^a-z\sA-Z])/g, "");
  let wordsNoPunctuation = noPunctuation.split(" ");
  let words = firstPhrase.split(" ");

  let wordIndex = getMatchingWordIndex(wordsNoPunctuation);
  let matchingWord = wordsNoPunctuation[wordIndex];

  let wordData = parsedData[matchingWord.toLowerCase()];

  let location = wordData[getRandomNumber(wordData.length)];
  let secondPhraseIndex = location.phraseIndex;
  let secondPhrase = phrases[secondPhraseIndex];
  let secondPhraseWords = secondPhrase.split(" ");

  if (
    secondPhraseIndex === phraseIndex ||
    wordIndex === 0 ||
    wordIndex === words.length - 1 ||
    location.wordIndex === 0 ||
    location.wordIndex === secondPhraseWords.length - 1 ||
    wordData.length <= 1
  ) {
    return generateRandom();
  }

  let firstHalf;
  let secondHalf;

  if (getRandomNumber(2)) {
    firstHalf = [...words.slice(0, wordIndex), words[wordIndex]];
    secondHalf = secondPhraseWords.slice(location.wordIndex + 1);
  } else {
    firstHalf = [
      ...secondPhraseWords.slice(0, location.wordIndex),
      secondPhraseWords[location.wordIndex]
    ];
    secondHalf = words.slice(wordIndex + 1);
  }

  let allWords = firstHalf.concat(secondHalf);

  let sortedWords = allWords.slice().sort((a, b) => b.length - a.length);

  let scrambled = allWords.join(" ");

  if (
    scrambled === firstPhrase ||
    scrambled === phrases[location.phraseIndex]
  ) {
    return generateRandom();
  }
  return {
    scrambled: scrambled,
    searchTerm: sortedWords[0],
    firstPhrase: firstPhrase,
    secondPhrase: secondPhrase
  };
};
