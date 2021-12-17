const getPaddingString = (word, finalLentgh, fillingElement) => {
  let neWord = "";
  const wordLenght = word.split("").length;
  const fillingElementLength = fillingElement.split("").length;
  if (wordLenght === finalLentgh || wordLenght >= finalLentgh) {
    return word;
  } else if (fillingElementLength + wordLenght === finalLentgh) {
    return fillingElement + word;
 /*  } else if (wordLenght >= finalLentgh) {
    const givenLetters = word.split("");
    for (let i = 0; i < finalLentgh; i++) {
      const letter = givenLetters[i];
      neWord += letter;
      return neWord;
    } */
  } else {
    let filling = "";
    for (let i = 0; i < finalLentgh - wordLenght; i++) {
      filling += fillingElement;
      neWord = filling + word;
    }
    return neWord;
  }
};

export default getPaddingString;
