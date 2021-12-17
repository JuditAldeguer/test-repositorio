const getPaddingString = (word, finalLentgh, fillingElement) => {
  let neWord;
  const wordLenght = word.split("").length;
  const fillingElementLength =fillingElement.split("").length;
  debugger;
  if (wordLenght === finalLentgh) {
    return word;
  } else if (fillingElementLength + wordLenght === finalLentgh  ){
      debugger;
    return fillingElement + word;
  }  else if (wordLenght >= finalLentgh) {
    const givenLetters = word.split("");
    for (let i = 0; i < finalLentgh; i++) {
      debugger;
      const letter = givenLetters[i];
      neWord += letter;
      return neWord;
    }
  } else {
    let filling='';
    for (let i = 0; i < (finalLentgh-wordLenght); i++) {
      debugger;
      filling += fillingElement;
      console.log(filling);
      neWord = filling + word;
      console.log(neWord);
    }
    return neWord;
  }
};

export default getPaddingString;
