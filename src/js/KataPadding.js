const getPaddingString =(givenString,givenFinalLentgh,fillingElement)=>{
    debugger;
    const wordLenght=givenString.split('').lentgh;
     if (wordLenght === givenFinalLentgh){
         return givenString;
     } else if (wordLenght >= givenFinalLentgh){
         let word;
        const givenLetters = givenString.split('', givenFinalLentgh);
        for (let i = 0; i < givenLetters.length; i++) {
            const letter = givenLetters[i];
            word += letter;
            return word;
        }
     }
};

export default getPaddingString;