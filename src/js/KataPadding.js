const getPaddingString =(givenString,givenFinalLentgh,fillingElement)=>{
    debugger;
     if (givenString.lentgh === givenFinalLentgh){
         return givenString;
     } else if (givenString.lentgh >= givenFinalLentgh){
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