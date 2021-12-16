const getPaddingString =(word,givenFinalLentgh,fillingElement)=>{
    debugger;
    const wordLenght= word.split('').length;
     if (wordLenght === givenFinalLentgh){
         return word;
     } else if (wordLenght >= givenFinalLentgh){
         let word;
        const givenLetters = word.split('', givenFinalLentgh);
        for (let i = 0; i < givenLetters.length; i++) {
            const letter = givenLetters[i];
            word += letter;
            return word;
        }
     }
};

export default getPaddingString;