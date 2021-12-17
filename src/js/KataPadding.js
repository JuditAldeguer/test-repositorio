const getPaddingString = (word, finalLentgh, fillingElement) => {
  let neWord = "";
  const wordLenght = word.split("").length;
  const fillingElementLength = fillingElement.split("").length;
  if (wordLenght >= finalLentgh || wordLenght + fillingElementLength > finalLentgh) {
    return word;
  } else if (fillingElementLength + wordLenght === finalLentgh) {
    return fillingElement + word;
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
