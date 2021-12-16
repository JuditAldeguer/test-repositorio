const getPaddingString = (word, finalLentgh, fillingElement) => {
  let neWord;
  const wordLenght = word.split("").length;
  debugger;
  if (wordLenght === finalLentgh) {
    return word;
  } else if (wordLenght >= finalLentgh) {
    const givenLetters = word.split("");
    for (let i = 0; i < finalLentgh; i++) {
      debugger;
      const letter = givenLetters[i];
      neWord += letter;
      return neWord;
    }
  } else {
    let filling;
    for (let i = 0; i < finalLentgh; i++) {
      debugger;
      filling = fillingElement;
      neWord = word + filling;
    }
    return neWord;
  }
};

export default getPaddingString;
